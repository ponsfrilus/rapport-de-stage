import Image from "next/image"

export default function EtatDeVaudSignature() {
    return (
        <div className="hidden etat-de-vaud-div flex flex-row mt-12 items-center gap-4">
            <Image className="etat-de-vaud-logo" alt="Logo de l'état de vaud" src="/etat_de_vaud_logo.webp" width="25" height="200"/>
            <div className="etat-de-vaud-separator bg-black w-[0.5px] h-20"></div>
            <p className="etat-de-vaud-text">
                Département de l&apos;enseignement et de la formation professionnelle<br />
                Office cantonal d’orientation scolaire et professionnelle<br />
                2024
            </p>
        </div>
    )
}