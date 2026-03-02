import { createContext, useContext, useState, type ReactNode } from "react";

/**
 * Prototype Variants:
 * A = Plain — No Preview page, No Ads delay. Click movie → Player with standard pre-roll ad.
 * B = Preview — Click movie → Netflix-style Preview/Detail page (with video). Player has standard pre-roll ad.
 * C = Ads Delay — Click movie → Player directly. Player shows the "Video 30" ad delay feature.
 */
export type PrototypeVariant = "A" | "B" | "C";

interface PrototypeContextType {
  variant: PrototypeVariant;
  setVariant: (v: PrototypeVariant) => void;
  hasPreview: boolean;
  hasAdsDelay: boolean;
}

const PrototypeContext = createContext<PrototypeContextType>({
  variant: "A",
  setVariant: () => {},
  hasPreview: false,
  hasAdsDelay: false,
});

export function PrototypeProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<PrototypeVariant>("A");

  const hasPreview = variant === "B";
  const hasAdsDelay = variant === "C";

  return (
    <PrototypeContext.Provider value={{ variant, setVariant, hasPreview, hasAdsDelay }}>
      {children}
    </PrototypeContext.Provider>
  );
}

export function usePrototype() {
  return useContext(PrototypeContext);
}
