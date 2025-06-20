"use client";

import { Link } from "@heroui/react";
import { getTranslation } from "@/lib/i18n";

export default function BlogLink({ locale = "en" }) {
  const t = function(key) {
    return getTranslation(locale, key);
  };

  return (
    <Link color="foreground" href="/blog">
      {t("Blog")}
    </Link>
  );
} 