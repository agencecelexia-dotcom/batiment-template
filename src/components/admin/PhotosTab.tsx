"use client";

import { useState, useRef } from "react";
import { X, ZoomIn, Upload, Check, Loader2, ImageIcon } from "lucide-react";

interface PhotoItem {
  path: string;
  filename: string;
  usage: string;
}

interface PhotoGroup {
  label: string;
  photos: PhotoItem[];
}

const PHOTO_GROUPS: PhotoGroup[] = [
  {
    label: "Hero & Bannieres",
    photos: [
      { path: "/images/heroes/accueil.jpeg", filename: "heroes/accueil.jpeg", usage: "Hero page d'accueil" },
      { path: "/images/heroes/maconnerie.jpeg", filename: "heroes/maconnerie.jpeg", usage: "Hero page maconnerie" },
      { path: "/images/heroes/ravalement.jpeg", filename: "heroes/ravalement.jpeg", usage: "Hero page ravalement facades" },
      { path: "/images/heroes/extension.jpeg", filename: "heroes/extension.jpeg", usage: "Hero page extension surelevation" },
      { path: "/images/heroes/renovation.jpeg", filename: "heroes/renovation.jpeg", usage: "Hero page renovation interieure" },
      { path: "/images/heroes/amenagement.jpeg", filename: "heroes/amenagement.jpeg", usage: "Hero page amenagement exterieur" },
      { path: "/images/heroes/generique-batiment.jpeg", filename: "heroes/generique-batiment.jpeg", usage: "Hero blog, avis-clients, contact, a-propos, realisations + CTA bandeau" },
    ],
  },
  {
    label: "Sections",
    photos: [
      { path: "/images/sections/urgence-card.png", filename: "sections/urgence-card.png", usage: "Section intervention rapide" },
      { path: "/images/sections/projet-card.jpeg", filename: "sections/projet-card.jpeg", usage: "Section projets / realisations en accueil" },
    ],
  },
  {
    label: "Equipe & A propos",
    photos: [
      { path: "/images/pages/a-propos-fondateur.jpeg", filename: "pages/a-propos-fondateur.jpeg", usage: "Portrait du fondateur — page A propos" },
      { path: "/images/pages/a-propos-equipe.jpeg", filename: "pages/a-propos-equipe.jpeg", usage: "Photo equipe — page A propos" },
    ],
  },
  {
    label: "Pages services",
    photos: [
      { path: "/images/pages/maconnerie-murs.jpeg", filename: "pages/maconnerie-murs.jpeg", usage: "Page maconnerie — construction murs" },
      { path: "/images/pages/maconnerie-fondations.jpeg", filename: "pages/maconnerie-fondations.jpeg", usage: "Page maconnerie — fondations" },
      { path: "/images/pages/ravalement-facade.jpeg", filename: "pages/ravalement-facade.jpeg", usage: "Page ravalement — facade immeuble" },
      { path: "/images/pages/ravalement-isolation.jpeg", filename: "pages/ravalement-isolation.jpeg", usage: "Page ravalement — isolation thermique" },
      { path: "/images/pages/extension-maison.jpeg", filename: "pages/extension-maison.jpeg", usage: "Page extension — agrandissement maison" },
      { path: "/images/pages/extension-surelevation.jpeg", filename: "pages/extension-surelevation.jpeg", usage: "Page extension — surelevation" },
      { path: "/images/pages/renovation-appartement.jpeg", filename: "pages/renovation-appartement.jpeg", usage: "Page renovation — appartement complet" },
      { path: "/images/pages/amenagement-terrasse.jpeg", filename: "pages/amenagement-terrasse.jpeg", usage: "Page amenagement — terrasse et cloture" },
    ],
  },
  {
    label: "Realisations — Avant",
    photos: [
      { path: "/images/realisations/facade-before.jpeg", filename: "realisations/facade-before.jpeg", usage: "Ravalement facade — avant travaux" },
      { path: "/images/realisations/extension-before.jpeg", filename: "realisations/extension-before.jpeg", usage: "Extension maison — avant travaux" },
      { path: "/images/realisations/terrasse-before.jpeg", filename: "realisations/terrasse-before.jpeg", usage: "Terrasse — avant travaux" },
      { path: "/images/realisations/renovation-appt-before.jpeg", filename: "realisations/renovation-appt-before.jpeg", usage: "Renovation appartement — avant travaux" },
      { path: "/images/realisations/mur-cloture-before.jpeg", filename: "realisations/mur-cloture-before.jpeg", usage: "Mur cloture — avant travaux" },
      { path: "/images/realisations/surelevation-before.jpeg", filename: "realisations/surelevation-before.jpeg", usage: "Surelevation — avant travaux" },
    ],
  },
  {
    label: "Realisations — Apres",
    photos: [
      { path: "/images/realisations/facade-after.jpeg", filename: "realisations/facade-after.jpeg", usage: "Ravalement facade — apres travaux" },
      { path: "/images/realisations/extension-after.jpeg", filename: "realisations/extension-after.jpeg", usage: "Extension maison — apres travaux" },
      { path: "/images/realisations/terrasse-after.jpeg", filename: "realisations/terrasse-after.jpeg", usage: "Terrasse — apres travaux" },
      { path: "/images/realisations/renovation-appt-after.jpeg", filename: "realisations/renovation-appt-after.jpeg", usage: "Renovation appartement — apres travaux" },
      { path: "/images/realisations/mur-cloture-after.jpeg", filename: "realisations/mur-cloture-after.jpeg", usage: "Mur cloture — apres travaux" },
      { path: "/images/realisations/surelevation-after.jpeg", filename: "realisations/surelevation-after.jpeg", usage: "Surelevation — apres travaux" },
    ],
  },
];

function PhotoCard({
  photo,
  onPreview,
}: {
  photo: PhotoItem;
  onPreview: (p: PhotoItem) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [imgKey, setImgKey] = useState(0);
  const [hasError, setHasError] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploaded(false);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("path", photo.path);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setUploaded(true);
        setHasError(false);
        setImgKey((k) => k + 1);
        setTimeout(() => setUploaded(false), 2000);
      }
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  return (
    <div className="group overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 transition-colors hover:border-primary-900">
      {/* Image */}
      <div
        className="relative aspect-video cursor-pointer bg-neutral-100"
        onClick={() => onPreview(photo)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={imgKey}
          src={photo.path + "?v=" + imgKey}
          alt={photo.filename}
          className={`h-full w-full object-cover ${hasError ? "hidden" : ""}`}
          onError={() => setHasError(true)}
          onLoad={() => setHasError(false)}
        />
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-neutral-300">
            <ImageIcon size={28} />
            <span className="text-[10px]">Pas d&apos;image</span>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
          <ZoomIn
            size={20}
            className="text-white opacity-0 transition-opacity group-hover:opacity-100"
          />
        </div>
      </div>

      {/* Info + Upload */}
      <div className="p-2.5">
        <p className="truncate font-mono text-xs text-neutral-600">
          {photo.filename}
        </p>
        <p className="mt-0.5 line-clamp-2 text-xs text-neutral-400">
          {photo.usage}
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleUpload}
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className={`mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg border px-2 py-1.5 text-xs font-medium transition-colors ${
            uploaded
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-neutral-200 text-neutral-600 hover:bg-neutral-100"
          } disabled:opacity-50`}
        >
          {uploading ? (
            <>
              <Loader2 size={12} className="animate-spin" />
              Upload...
            </>
          ) : uploaded ? (
            <>
              <Check size={12} />
              Remplace !
            </>
          ) : (
            <>
              <Upload size={12} />
              Remplacer
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function PhotosTab() {
  const [preview, setPreview] = useState<PhotoItem | null>(null);

  const totalPhotos = PHOTO_GROUPS.reduce(
    (sum, g) => sum + g.photos.length,
    0
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-3xl font-bold text-neutral-900">
          Bibliotheque photos
        </h1>
        <p className="mt-1 text-neutral-500">
          {totalPhotos} images utilisees sur le site — cliquez sur
          &laquo;&nbsp;Remplacer&nbsp;&raquo; pour modifier une image
        </p>
      </div>

      {PHOTO_GROUPS.map((group) => (
        <div
          key={group.label}
          className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
        >
          <div className="border-b border-neutral-100 px-6 py-4">
            <h2 className="font-heading text-base font-semibold text-neutral-900">
              {group.label}
            </h2>
            <p className="mt-0.5 text-xs text-neutral-500">
              {group.photos.length} photo
              {group.photos.length > 1 ? "s" : ""}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {group.photos.map((photo) => (
              <PhotoCard
                key={photo.path}
                photo={photo}
                onPreview={setPreview}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Preview Modal */}
      {preview && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreview(null)}
              className="absolute -top-10 right-0 flex items-center gap-1.5 text-sm text-white/70 hover:text-white"
            >
              <X size={16} />
              Fermer
            </button>
            <div className="relative overflow-hidden rounded-xl bg-neutral-900">
              <div className="flex aspect-video w-full items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview.path}
                  alt={preview.filename}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm">
              <p className="font-mono text-sm text-white/90">{preview.path}</p>
              <p className="mt-0.5 text-xs text-white/60">{preview.usage}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
