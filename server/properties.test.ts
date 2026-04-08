import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAdminContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "admin-user",
    email: "admin@inmomartorelles.es",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

function createRegularUserContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 2,
    openId: "regular-user",
    email: "user@example.com",
    name: "Regular User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("properties.listActive", () => {
  it("is accessible as a public procedure (no auth required)", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    // Should not throw - it's a public procedure
    // The actual DB call may fail in test env, but the procedure itself should be accessible
    try {
      const result = await caller.properties.listActive();
      expect(Array.isArray(result)).toBe(true);
    } catch (e: any) {
      // DB connection errors are expected in test env, but NOT auth errors
      expect(e.code).not.toBe("UNAUTHORIZED");
      expect(e.code).not.toBe("FORBIDDEN");
    }
  });
});

describe("properties.listAll (admin only)", () => {
  it("rejects unauthenticated users", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.properties.listAll()).rejects.toThrow("You do not have required permission");
  });

  it("rejects regular (non-admin) users", async () => {
    const ctx = createRegularUserContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.properties.listAll()).rejects.toThrow("You do not have required permission");
  });

  it("allows admin users", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    try {
      const result = await caller.properties.listAll();
      expect(Array.isArray(result)).toBe(true);
    } catch (e: any) {
      // DB errors ok, but NOT auth errors
      expect(e.code).not.toBe("UNAUTHORIZED");
      expect(e.code).not.toBe("FORBIDDEN");
    }
  });
});

describe("properties.create (admin only)", () => {
  it("rejects unauthenticated users", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const input = {
      type: "house" as const,
      transactionType: "sale" as const,
      titleEs: "Test Casa",
      titleCa: "Test Casa CA",
      titleEn: "Test House",
      location: "Martorelles",
      price: "100.000 €",
      bedrooms: 3,
      bathrooms: 2,
      area: 100,
      extraArea: 0,
      tag: "new" as const,
      isActive: 1,
      sortOrder: 0,
    };

    await expect(caller.properties.create(input)).rejects.toThrow("You do not have required permission");
  });

  it("rejects regular users", async () => {
    const ctx = createRegularUserContext();
    const caller = appRouter.createCaller(ctx);

    const input = {
      type: "house" as const,
      transactionType: "sale" as const,
      titleEs: "Test Casa",
      titleCa: "Test Casa CA",
      titleEn: "Test House",
      location: "Martorelles",
      price: "100.000 €",
      bedrooms: 3,
      bathrooms: 2,
      area: 100,
      extraArea: 0,
      tag: "new" as const,
      isActive: 1,
      sortOrder: 0,
    };

    await expect(caller.properties.create(input)).rejects.toThrow("You do not have required permission");
  });

  it("validates input schema - rejects empty title", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const input = {
      type: "house" as const,
      transactionType: "sale" as const,
      titleEs: "", // empty - should fail validation
      titleCa: "Test",
      titleEn: "Test",
      location: "Martorelles",
      price: "100.000 €",
    };

    await expect(caller.properties.create(input)).rejects.toThrow();
  });
});

describe("properties.delete (admin only)", () => {
  it("rejects unauthenticated users", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.properties.delete({ id: 1 })).rejects.toThrow("You do not have required permission");
  });

  it("rejects regular users", async () => {
    const ctx = createRegularUserContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.properties.delete({ id: 1 })).rejects.toThrow("You do not have required permission");
  });
});

describe("properties.toggleActive (admin only)", () => {
  it("rejects unauthenticated users", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.properties.toggleActive({ id: 1, isActive: 0 })
    ).rejects.toThrow("You do not have required permission");
  });

  it("rejects regular users", async () => {
    const ctx = createRegularUserContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.properties.toggleActive({ id: 1, isActive: 0 })
    ).rejects.toThrow("You do not have required permission");
  });
});

describe("properties.update (admin only)", () => {
  it("rejects unauthenticated users", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.properties.update({ id: 1, data: { price: "200.000 €" } })
    ).rejects.toThrow("You do not have required permission");
  });
});
