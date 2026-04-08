/**
 * Admin Properties Panel — Protected by Manus OAuth (admin role only)
 * Full CRUD for properties: list, create, edit, delete, toggle active, manage images.
 */
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { getLoginUrl } from "@/const";
import { useState, useRef, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Plus, Trash2, Edit, Eye, EyeOff, Upload, X, ArrowLeft,
  Image as ImageIcon, GripVertical, Save, Loader2, LogOut, Home as HomeIcon
} from "lucide-react";

type PropertyType = "house" | "apartment" | "land" | "commercial" | "other";
type TransactionType = "sale" | "rent";
type TagType = "featured" | "exclusive" | "new";

interface PropertyForm {
  type: PropertyType;
  transactionType: TransactionType;
  titleEs: string;
  titleCa: string;
  titleEn: string;
  descriptionEs: string;
  descriptionCa: string;
  descriptionEn: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  extraArea: number;
  extraAreaLabel: string;
  tag: TagType;
  isActive: number;
  sortOrder: number;
}

const emptyForm: PropertyForm = {
  type: "house",
  transactionType: "sale",
  titleEs: "", titleCa: "", titleEn: "",
  descriptionEs: "", descriptionCa: "", descriptionEn: "",
  location: "", price: "",
  bedrooms: 0, bathrooms: 0, area: 0,
  extraArea: 0, extraAreaLabel: "",
  tag: "new", isActive: 1, sortOrder: 0,
};

const typeLabels: Record<PropertyType, string> = {
  house: "Casa", apartment: "Piso", land: "Parcela", commercial: "Comercial", other: "Otro"
};
const tagLabels: Record<TagType, string> = {
  featured: "Destacada", exclusive: "Exclusiva", new: "Nueva"
};

export default function AdminProperties() {
  const { user, loading: authLoading, isAuthenticated, logout } = useAuth();
  const [view, setView] = useState<"list" | "form">("list");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<PropertyForm>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const utils = trpc.useUtils();
  const { data: allProperties, isLoading } = trpc.properties.listAll.useQuery(undefined, {
    enabled: isAuthenticated && user?.role === "admin",
  });

  const createMutation = trpc.properties.create.useMutation({
    onSuccess: () => { utils.properties.listAll.invalidate(); setView("list"); },
  });
  const updateMutation = trpc.properties.update.useMutation({
    onSuccess: () => { utils.properties.listAll.invalidate(); setView("list"); },
  });
  const deleteMutation = trpc.properties.delete.useMutation({
    onSuccess: () => { utils.properties.listAll.invalidate(); },
  });
  const toggleActiveMutation = trpc.properties.toggleActive.useMutation({
    onSuccess: () => { utils.properties.listAll.invalidate(); },
  });
  const uploadImageMutation = trpc.properties.uploadImage.useMutation({
    onSuccess: () => { utils.properties.listAll.invalidate(); },
  });
  const deleteImageMutation = trpc.properties.deleteImage.useMutation({
    onSuccess: () => { utils.properties.listAll.invalidate(); },
  });

  // Auth guard
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#2E6B4F]" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="font-serif text-2xl font-semibold text-[#1a1a1a] mb-4">Panel de Administración</h2>
          <p className="text-[#1a1a1a]/60 mb-6">Inicia sesión para gestionar las propiedades.</p>
          <a
            href={getLoginUrl()}
            className="inline-block px-6 py-3 bg-[#2E6B4F] text-white font-sans font-medium rounded-sm hover:bg-[#245a40] transition-colors"
          >
            Iniciar Sesión
          </a>
        </div>
      </div>
    );
  }

  if (user?.role !== "admin") {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="font-serif text-2xl font-semibold text-[#1a1a1a] mb-4">Acceso Denegado</h2>
          <p className="text-[#1a1a1a]/60 mb-6">No tienes permisos de administrador para acceder a este panel.</p>
          <a href="/" className="inline-block px-6 py-3 bg-[#2E6B4F] text-white font-sans font-medium rounded-sm hover:bg-[#245a40] transition-colors">
            Volver al Inicio
          </a>
        </div>
      </div>
    );
  }

  const handleNewProperty = () => {
    setEditingId(null);
    setForm(emptyForm);
    setView("form");
  };

  const handleEdit = (prop: any) => {
    setEditingId(prop.id);
    setForm({
      type: prop.type,
      transactionType: prop.transactionType,
      titleEs: prop.titleEs, titleCa: prop.titleCa, titleEn: prop.titleEn,
      descriptionEs: prop.descriptionEs || "",
      descriptionCa: prop.descriptionCa || "",
      descriptionEn: prop.descriptionEn || "",
      location: prop.location, price: prop.price,
      bedrooms: prop.bedrooms ?? 0, bathrooms: prop.bathrooms ?? 0,
      area: prop.area ?? 0, extraArea: prop.extraArea ?? 0,
      extraAreaLabel: prop.extraAreaLabel || "",
      tag: prop.tag, isActive: prop.isActive, sortOrder: prop.sortOrder ?? 0,
    });
    setView("form");
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (editingId) {
        await updateMutation.mutateAsync({ id: editingId, data: form });
      } else {
        await createMutation.mutateAsync(form);
      }
    } catch (e) {
      console.error("Error saving property:", e);
    }
    setSaving(false);
  };

  const handleDelete = async (id: number) => {
    if (confirm("¿Estás seguro de que quieres eliminar esta propiedad? Se eliminarán también todas sus imágenes.")) {
      await deleteMutation.mutateAsync({ id });
    }
  };

  const handleToggleActive = async (id: number, currentActive: number) => {
    await toggleActiveMutation.mutateAsync({ id, isActive: currentActive === 1 ? 0 : 1 });
  };

  const handleImageUpload = async (propertyId: number, files: FileList) => {
    setUploading(true);
    for (const file of Array.from(files)) {
      const reader = new FileReader();
      const base64 = await new Promise<string>((resolve) => {
        reader.onload = () => {
          const result = reader.result as string;
          resolve(result.split(",")[1]);
        };
        reader.readAsDataURL(file);
      });
      await uploadImageMutation.mutateAsync({
        propertyId,
        base64,
        filename: file.name,
        contentType: file.type,
      });
    }
    setUploading(false);
  };

  const handleDeleteImage = async (imageId: number) => {
    if (confirm("¿Eliminar esta imagen?")) {
      await deleteImageMutation.mutateAsync({ imageId });
    }
  };

  const updateField = (field: keyof PropertyForm, value: any) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  // ── FORM VIEW ──
  if (view === "form") {
    const editingProp = editingId ? allProperties?.find(p => p.id === editingId) : null;
    return (
      <div className="min-h-screen bg-[#FAF8F5]">
        <div className="bg-white border-b border-[#e8e4df] sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <button onClick={() => setView("list")} className="flex items-center gap-2 text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-sans text-sm">Volver al listado</span>
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#2E6B4F] text-white font-sans text-sm font-medium rounded-sm hover:bg-[#245a40] transition-colors disabled:opacity-50"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              {editingId ? "Guardar Cambios" : "Crear Propiedad"}
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          <h1 className="font-serif text-2xl font-semibold text-[#1a1a1a] mb-8">
            {editingId ? "Editar Propiedad" : "Nueva Propiedad"}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left column: Basic info */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-sm border border-[#e8e4df]">
                <h3 className="font-sans text-sm font-semibold text-[#1a1a1a] uppercase tracking-wider mb-4">Información Básica</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-xs text-[#1a1a1a]/60 mb-1">Tipo</label>
                    <select value={form.type} onChange={e => updateField("type", e.target.value)} className="w-full px-3 py-2 border border-[#e8e4df] rounded-sm font-sans text-sm focus:outline-none focus:border-[#2E6B4F]">
                      <option value="house">Casa</option>
                      <option value="apartment">Piso</option>
                      <option value="land">Parcela</option>
                      <option value="commercial">Comercial</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans text-xs text-[#1a1a1a]/60 mb-1">Operación</label>
                    <select value={form.transactionType} onChange={e => updateField("transactionType", e.target.value)} className="w-full px-3 py-2 border border-[#e8e4df] rounded-sm font-sans text-sm focus:outline-none focus:border-[#2E6B4F]">
                      <option value="sale">Venta</option>
                      <option value="rent">Alquiler</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block font-sans text-xs text-[#1a1a1a]/60 mb-1">Ubicación</label>
                  <input type="text" value={form.location} onChange={e => updateField("location", e.target.value)} placeholder="Martorelles, Vallès Oriental" className="w-full px-3 py-2 border border-[#e8e4df] rounded-sm font-sans text-sm focus:outline-none focus:border-[#2E6B4F]" />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block font-sans text-xs text-[#1a1a1a]/60 mb-1">Precio</label>
                    <input type="text" value={form.price} onChange={e => updateField("price", e.target.value)} placeholder="250.000 €" className="w-full px-3 py-2 border border-[#e8e4df] rounded-sm font-sans text-sm focus:outline-none focus:border-[#2E6B4F]" />
                  </div>
                  <div>
                    <label className="block font-sans text-xs text-[#1a1a1a]/60 mb-1">Etiqueta</label>
                    <select value={form.tag} onChange={e => updateField("tag", e.target.value)} className="w-full px-3 py-2 border border-[#e8e4df] rounded-sm font-sans text-sm focus:outline-none focus:border-[#2E6B4F]">
                      <option value="new">Nueva</option>
                      <option value="featured">Destacada</option>
                      <option value="exclusive">Exclusiva</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  <div>
                    <label className="block font-sans text-xs text-[#1a1a1a]/60 mb-1">Hab.</label>
                    <input type="number" min={0} value={form.bedrooms} onChange={e => updateField("bedrooms", parseInt(e.target.value) || 0)} className="w-full px-3 py-2 border border-[#e8e4df] rounded-sm font-sans text-sm focus:outline-none focus:border-[#2E6B4F]" />
                  </div>
                  <div>
                    <label className="block font-sans text-xs text-[#1a1a1a]/60 mb-1">Baños</label>
                    <input type="number" min={0} value={form.bathrooms} onChange={e => updateField("bathrooms", parseInt(e.target.value) || 0)} className="w-full px-3 py-2 border border-[#e8e4df] rounded-sm font-sans text-sm focus:outline-none focus:border-[#2E6B4F]" />
                  </div>
                  <div>
                    <label className="block font-sans text-xs text-[#1a1a1a]/60 mb-1">m²</label>
                    <input type="number" min={0} value={form.area} onChange={e => updateField("area", parseInt(e.target.value) || 0)} className="w-full px-3 py-2 border border-[#e8e4df] rounded-sm font-sans text-sm focus:outline-none focus:border-[#2E6B4F]" />
                  </div>
                  <div>
                    <label className="block font-sans text-xs text-[#1a1a1a]/60 mb-1">Extra m²</label>
                    <input type="number" min={0} value={form.extraArea} onChange={e => updateField("extraArea", parseInt(e.target.value) || 0)} className="w-full px-3 py-2 border border-[#e8e4df] rounded-sm font-sans text-sm focus:outline-none focus:border-[#2E6B4F]" />
                  </div>
                </div>
                {form.extraArea > 0 && (
                  <div className="mt-4">
                    <label className="block font-sans text-xs text-[#1a1a1a]/60 mb-1">Etiqueta Extra m² (patio, jardín, terraza...)</label>
                    <input type="text" value={form.extraAreaLabel} onChange={e => updateField("extraAreaLabel", e.target.value)} placeholder="patio" className="w-full px-3 py-2 border border-[#e8e4df] rounded-sm font-sans text-sm focus:outline-none focus:border-[#2E6B4F]" />
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block font-sans text-xs text-[#1a1a1a]/60 mb-1">Orden</label>
                    <input type="number" min={0} value={form.sortOrder} onChange={e => updateField("sortOrder", parseInt(e.target.value) || 0)} className="w-full px-3 py-2 border border-[#e8e4df] rounded-sm font-sans text-sm focus:outline-none focus:border-[#2E6B4F]" />
                  </div>
                  <div className="flex items-end">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={form.isActive === 1} onChange={e => updateField("isActive", e.target.checked ? 1 : 0)} className="w-4 h-4 accent-[#2E6B4F]" />
                      <span className="font-sans text-sm text-[#1a1a1a]">Visible en la web</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Titles & descriptions */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-sm border border-[#e8e4df]">
                <h3 className="font-sans text-sm font-semibold text-[#1a1a1a] uppercase tracking-wider mb-4">Títulos (3 idiomas)</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block font-sans text-xs text-[#1a1a1a]/60 mb-1">Castellano</label>
                    <input type="text" value={form.titleEs} onChange={e => updateField("titleEs", e.target.value)} className="w-full px-3 py-2 border border-[#e8e4df] rounded-sm font-sans text-sm focus:outline-none focus:border-[#2E6B4F]" />
                  </div>
                  <div>
                    <label className="block font-sans text-xs text-[#1a1a1a]/60 mb-1">Català</label>
                    <input type="text" value={form.titleCa} onChange={e => updateField("titleCa", e.target.value)} className="w-full px-3 py-2 border border-[#e8e4df] rounded-sm font-sans text-sm focus:outline-none focus:border-[#2E6B4F]" />
                  </div>
                  <div>
                    <label className="block font-sans text-xs text-[#1a1a1a]/60 mb-1">English</label>
                    <input type="text" value={form.titleEn} onChange={e => updateField("titleEn", e.target.value)} className="w-full px-3 py-2 border border-[#e8e4df] rounded-sm font-sans text-sm focus:outline-none focus:border-[#2E6B4F]" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-sm border border-[#e8e4df]">
                <h3 className="font-sans text-sm font-semibold text-[#1a1a1a] uppercase tracking-wider mb-4">Descripciones</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block font-sans text-xs text-[#1a1a1a]/60 mb-1">Castellano</label>
                    <textarea rows={3} value={form.descriptionEs} onChange={e => updateField("descriptionEs", e.target.value)} className="w-full px-3 py-2 border border-[#e8e4df] rounded-sm font-sans text-sm focus:outline-none focus:border-[#2E6B4F] resize-none" />
                  </div>
                  <div>
                    <label className="block font-sans text-xs text-[#1a1a1a]/60 mb-1">Català</label>
                    <textarea rows={3} value={form.descriptionCa} onChange={e => updateField("descriptionCa", e.target.value)} className="w-full px-3 py-2 border border-[#e8e4df] rounded-sm font-sans text-sm focus:outline-none focus:border-[#2E6B4F] resize-none" />
                  </div>
                  <div>
                    <label className="block font-sans text-xs text-[#1a1a1a]/60 mb-1">English</label>
                    <textarea rows={3} value={form.descriptionEn} onChange={e => updateField("descriptionEn", e.target.value)} className="w-full px-3 py-2 border border-[#e8e4df] rounded-sm font-sans text-sm focus:outline-none focus:border-[#2E6B4F] resize-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Images section (only when editing) */}
          {editingId && editingProp && (
            <div className="mt-8 bg-white p-6 rounded-sm border border-[#e8e4df]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-sans text-sm font-semibold text-[#1a1a1a] uppercase tracking-wider">
                  Imágenes ({editingProp.images?.length || 0})
                </h3>
                <div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={e => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleImageUpload(editingId, e.target.files);
                      }
                    }}
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="flex items-center gap-2 px-4 py-2 bg-[#2E6B4F]/10 text-[#2E6B4F] font-sans text-sm font-medium rounded-sm hover:bg-[#2E6B4F]/20 transition-colors disabled:opacity-50"
                  >
                    {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                    Subir Imágenes
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {editingProp.images?.map((img: any) => (
                  <div key={img.id} className="relative group aspect-square rounded-sm overflow-hidden border border-[#e8e4df]">
                    <img src={img.url} alt="" className="w-full h-full object-cover" />
                    <button
                      onClick={() => handleDeleteImage(img.id)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── LIST VIEW ──
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="bg-white border-b border-[#e8e4df] sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="font-serif text-xl font-semibold text-[#1a1a1a]">Panel de Propiedades</h1>
            <span className="px-2 py-0.5 bg-[#2E6B4F]/10 text-[#2E6B4F] font-sans text-xs font-medium rounded-sm">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-1.5 text-[#1a1a1a]/60 hover:text-[#1a1a1a] font-sans text-sm transition-colors">
              <HomeIcon className="w-4 h-4" />
              Ver Web
            </a>
            <button
              onClick={() => logout()}
              className="flex items-center gap-1.5 text-[#1a1a1a]/60 hover:text-red-500 font-sans text-sm transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Salir
            </button>
            <button
              onClick={handleNewProperty}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#2E6B4F] text-white font-sans text-sm font-medium rounded-sm hover:bg-[#245a40] transition-colors"
            >
              <Plus className="w-4 h-4" />
              Nueva Propiedad
            </button>
          </div>
        </div>
      </div>

      {/* Properties list */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-[#2E6B4F]" />
          </div>
        ) : !allProperties || allProperties.length === 0 ? (
          <div className="text-center py-20">
            <ImageIcon className="w-12 h-12 text-[#1a1a1a]/20 mx-auto mb-4" />
            <p className="font-sans text-[#1a1a1a]/60">No hay propiedades todavía.</p>
            <button onClick={handleNewProperty} className="mt-4 px-4 py-2 bg-[#2E6B4F] text-white font-sans text-sm rounded-sm hover:bg-[#245a40] transition-colors">
              Crear la primera
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {allProperties.map((prop) => (
              <div
                key={prop.id}
                className={`bg-white border rounded-sm p-4 flex items-center gap-4 transition-all hover:shadow-md ${
                  prop.isActive ? "border-[#e8e4df]" : "border-red-200 bg-red-50/30"
                }`}
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 rounded-sm overflow-hidden flex-shrink-0 bg-[#e8e4df]">
                  {prop.images && prop.images.length > 0 ? (
                    <img src={prop.images[0].url} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-[#1a1a1a]/20" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 font-sans text-[10px] font-medium uppercase tracking-wider rounded-sm ${
                      prop.isActive ? "bg-[#2E6B4F]/10 text-[#2E6B4F]" : "bg-red-100 text-red-600"
                    }`}>
                      {prop.isActive ? "Activa" : "Oculta"}
                    </span>
                    <span className="px-2 py-0.5 bg-[#1a1a1a]/5 text-[#1a1a1a]/60 font-sans text-[10px] font-medium uppercase tracking-wider rounded-sm">
                      {typeLabels[prop.type as PropertyType] || prop.type}
                    </span>
                    <span className="px-2 py-0.5 bg-[#B8845C]/10 text-[#B8845C] font-sans text-[10px] font-medium uppercase tracking-wider rounded-sm">
                      {tagLabels[prop.tag as TagType] || prop.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[#1a1a1a] truncate">{prop.titleEs}</h3>
                  <p className="font-sans text-xs text-[#1a1a1a]/50">{prop.location} · {prop.price} · {prop.images?.length || 0} fotos</p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => handleToggleActive(prop.id, prop.isActive)}
                    className={`p-2 rounded-sm transition-colors ${
                      prop.isActive
                        ? "text-[#2E6B4F] hover:bg-[#2E6B4F]/10"
                        : "text-red-500 hover:bg-red-50"
                    }`}
                    title={prop.isActive ? "Ocultar de la web" : "Mostrar en la web"}
                  >
                    {prop.isActive ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => handleEdit(prop)}
                    className="p-2 text-[#1a1a1a]/60 hover:text-[#2E6B4F] hover:bg-[#2E6B4F]/10 rounded-sm transition-colors"
                    title="Editar"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(prop.id)}
                    className="p-2 text-[#1a1a1a]/60 hover:text-red-500 hover:bg-red-50 rounded-sm transition-colors"
                    title="Eliminar"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
