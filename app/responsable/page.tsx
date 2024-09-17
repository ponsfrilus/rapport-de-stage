import React from "react";
import EtatDeVaudSignature from "../components/EtatDeVaudSignature";

export default function Page() {
    return (
        <div className="mx-4 my-4 md:mx-14 md:my-14">
            {/* TITLES & DESCRIPTION */}
            <h1 className="text-4xl text-[#e42313]">RAPPORT DE STAGE</h1>
            <h1 className="text-4xl text-[#e42313] font-semibold">RESPONSABLE DU STAGE</h1>
            <p id="main-description" className="mt-8">
                Vous avez reçu cet/cette élève pour un stage en vue d’une formation professionnelle initiale.<br />
                Vos impressions, vos observations sont d’un grand intérêt pour la préparation de son choix.<br />
                Nous vous remercions vivement de remplir cette fiche.
            </p>
            {/* "ENTREPRISE" SECTION */}
            <div className="dotted-box mt-4 border-[3px] border-dotted border-[#e42313] px-6 py-3 max-w-4xl">
                <h2 className="text-3xl text-[#e42313]">ENTREPRISE</h2>
                <div className="flex flex-col md:flex-row md:gap-5">                    
                    <div className="dotted-input-under-title mt-5 flex flex-col gap-3 md:w-1/2">
                        <div className="dotted-input-text flex whitespace-nowrap">
                            Nom de l&apos;entreprise&nbsp;
                            <input type="text" className="w-full box-border" placeholder={".".repeat(500)}></input>
                        </div>
                        <div className="dotted-input-text flex whitespace-nowrap">
                            Nom du responsable&nbsp;
                            <input type="text" className="w-full box-border" placeholder={".".repeat(500)}></input>
                        </div>
                        <div className="dotted-input-text flex whitespace-nowrap">
                            E-mail&nbsp;
                            <input type="email" className="w-full box-border" placeholder={".".repeat(500)}></input>
                        </div>
                    </div>
                    <div className="dotted-input-under-title mt-3 md:mt-5 flex flex-col gap-3 md:w-1/2">
                        <div className="dotted-input-text flex whitespace-nowrap">
                            Adresse&nbsp;
                            <input type="text" className="w-full box-border" placeholder={".".repeat(500)}></input>
                        </div>
                        <div className="flex flex-col md:flex-row gap-3">
                            <div className="dotted-input-text flex whitespace-nowrap">
                                N° postal&nbsp;
                                <input type="text" className="w-full box-border" placeholder={".".repeat(500)}></input>
                            </div>
                            <div className="dotted-input-text flex whitespace-nowrap">
                                Localité&nbsp;
                                <input type="text" className="w-full box-border" placeholder={".".repeat(500)}></input>
                            </div>
                        </div>
                        <div className="dotted-input-text flex whitespace-nowrap">
                            Téléphone&nbsp;
                            <input type="email" className="w-full box-border" placeholder={".".repeat(500)}></input>
                        </div>
                    </div>
                </div>
            </div>
            {/* "STAGIAIRE" SECTION */}
            <div className="dotted-box mt-6 border-[3px] border-dotted border-[#e42313] px-6 py-3 max-w-4xl">
                <h2 className="text-3xl text-[#e42313]">STAGIAIRE</h2>
                <div className="flex flex-col md:flex-row md:gap-5">                    
                    <div className="dotted-input-under-title mt-5 flex flex-col gap-3 md:w-1/2">
                        <div className="dotted-input-text flex whitespace-nowrap">
                            Nom&nbsp;
                            <input type="text" className="w-full box-border" placeholder={".".repeat(500)}></input>
                        </div>
                        <div className="dotted-input-text flex whitespace-nowrap">
                            Prénom&nbsp;
                            <input type="text" className="w-full box-border" placeholder={".".repeat(500)}></input>
                        </div>
                        <div className="flex flex-col md:flex-row gap-3">
                            <div className="dotted-input-text flex whitespace-nowrap">
                                Classe&nbsp;
                                <input type="text" className="w-full box-border" placeholder={".".repeat(500)}></input>
                            </div>
                            <div className="dotted-input-text flex whitespace-nowrap">
                                Établissement&nbsp;
                                <input type="text" className="w-full box-border" placeholder={".".repeat(500)}></input>
                            </div>
                        </div>
                    </div>
                    <div className="dotted-input-under-title mt-5 flex flex-col gap-3 md:w-1/2">
                        <div className="dotted-input-text flex whitespace-nowrap">
                            Adresse&nbsp;
                            <input type="text" className="w-full box-border" placeholder={".".repeat(500)}></input>
                        </div>
                        <div className="flex flex-col md:flex-row gap-3">
                            <div className="dotted-input-text flex whitespace-nowrap">
                                N° postal&nbsp;
                                <input type="text" className="w-full box-border" placeholder={".".repeat(500)}></input>
                            </div>
                            <div className="dotted-input-text flex whitespace-nowrap">
                                Localité&nbsp;
                                <input type="text" className="w-full box-border" placeholder={".".repeat(500)}></input>
                            </div>
                        </div>
                        <div className="dotted-input-text flex whitespace-nowrap">
                            Téléphone&nbsp;
                            <input type="email" className="w-full box-border" placeholder={".".repeat(500)}></input>
                        </div>
                    </div>
                </div>
                <div className="internship-job-of flex flex-col sm:flex-row gap-5 mt-8">
                    <div className="w-full">
                        <div className="dotted-input-text flex flex-col md:flex-row whitespace-nowrap w-full">
                            Stage dans le métier de&nbsp;
                            <input type="text" className="w-full box-border" placeholder={".".repeat(500)}></input>
                        </div>
                    </div>
                    <div className="flex flex-col min-[450px]:flex-row gap-3 w-full">
                        <div className="dotted-input-text flex whitespace-nowrap w-1/2 max-[450px]:w-full">
                            du&nbsp;
                            <input type="text" className="w-full box-border" placeholder={".".repeat(500)}></input>
                        </div>
                        <div className="dotted-input-text flex whitespace-nowrap w-1/2 max-[450px]:w-full">
                            au&nbsp;
                            <input type="text" className="w-full box-border" placeholder={".".repeat(500)}></input>
                        </div>
                    </div>
                </div>
            </div>
            {/* "ATTITUDE GÉNÉRALE" SECTION */}
            <h2 className="section-title mt-8 text-3xl text-[#e42313]">ATTITUDE GÉNÉRALE</h2>
            <div className="radios-section max-w-2xl">
                <div className="appreciations-text md:flex gap-5 md:justify-end font-semibold hidden">
                    <span>Très bien</span>
                    <span>Satisfaisant</span>
                    <span>À améliorer</span>
                    <span>Pas observé</span>
                </div>
                <div className="flex flex-col gap-6 md:gap-0">
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Votre première impression</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="first-impression-really-good">Très bien</label>
                                <input name="first-impression" id="first-impression-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="first-impression-satisfying">Satisfaisant</label>
                                <input name="first-impression" id="first-impression-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="first-impression-to-upgrade">À améliorer</label>
                                <input name="first-impression" id="first-impression-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="first-impression-not-observed">Pas observé</label>
                                <input name="first-impression" id="first-impression-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Ponctualité</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="ponctuality-really-good">Très bien</label>
                                <input name="ponctuality" id="ponctuality-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="ponctuality-satisfying">Satisfaisant</label>
                                <input name="ponctuality" id="ponctuality-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="ponctuality-to-upgrade">À améliorer</label>
                                <input name="ponctuality" id="ponctuality-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="ponctuality-not-observed">Pas observé</label>
                                <input name="ponctuality" id="ponctuality-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Confiance en soi</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="self-confidence-really-good">Très bien</label>
                                <input name="self-confidence" id="self-confidence-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="self-confidence-satisfying">Satisfaisant</label>
                                <input name="self-confidence" id="self-confidence-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="self-confidence-to-upgrade">À améliorer</label>
                                <input name="self-confidence" id="self-confidence-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="self-confidence-not-observed">Pas observé</label>
                                <input name="self-confidence" id="self-confidence-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Dynamisme</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="dynamism-really-good">Très bien</label>
                                <input name="dynamism" id="dynamism-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="dynamism-satisfying">Satisfaisant</label>
                                <input name="dynamism" id="dynamism-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="dynamism-to-upgrade">À améliorer</label>
                                <input name="dynamism" id="dynamism-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="dynamism-not-observed">Pas observé</label>
                                <input name="dynamism" id="dynamism-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Attention, concentration</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="attention-concentration-really-good">Très bien</label>
                                <input name="attention-concentration" id="attention-concentration-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="attention-concentration-satisfying">Satisfaisant</label>
                                <input name="attention-concentration" id="attention-concentration-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="attention-concentration-to-upgrade">À améliorer</label>
                                <input name="attention-concentration" id="attention-concentration-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="attention-concentration-not-observed">Pas observé</label>
                                <input name="attention-concentration" id="attention-concentration-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Curiosité</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="curiosity-really-good">Très bien</label>
                                <input name="curiosity" id="curiosity-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="curiosity-satisfying">Satisfaisant</label>
                                <input name="curiosity" id="curiosity-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="curiosity-to-upgrade">À améliorer</label>
                                <input name="curiosity" id="curiosity-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="curiosity-not-observed">Pas observé</label>
                                <input name="curiosity" id="curiosity-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Esprit d&apos;initiative (sollicite du travail)</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="initiative-spirit-really-good">Très bien</label>
                                <input name="initiative-spirit" id="initiative-spirit-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="initiative-spirit-satisfying">Satisfaisant</label>
                                <input name="initiative-spirit" id="initiative-spirit-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="initiative-spirit-to-upgrade">À améliorer</label>
                                <input name="initiative-spirit" id="initiative-spirit-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="initiative-spirit-not-observed">Pas observé</label>
                                <input name="initiative-spirit" id="initiative-spirit-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Plaisir d&apos;apprendre</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="learning-pleasure-really-good">Très bien</label>
                                <input name="learning-pleasure" id="learning-pleasure-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="learning-pleasure-satisfying">Satisfaisant</label>
                                <input name="learning-pleasure" id="learning-pleasure-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="learning-pleasure-to-upgrade">À améliorer</label>
                                <input name="learning-pleasure" id="learning-pleasure-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="learning-pleasure-not-observed">Pas observé</label>
                                <input name="learning-pleasure" id="learning-pleasure-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="observations-remarks mt-6 max-w-4xl whitespace-nowrap">
                <div className="w-full">
                    <div className="flex flex-col md:flex-row whitespace-nowrap w-full">
                        Remarques / Observations&nbsp;
                        <textarea className="w-full box-border resize-none overflow-y-hidden" placeholder={".".repeat(500)}></textarea>
                    </div>
                </div>
            </div>
            {/* "EXÉCUTION DES TÂCHES" SECTION */}
            <h2 className="section-title mt-8 text-3xl text-[#e42313]">EXÉCUTION DES TÂCHES</h2>
            <div className="radios-section max-w-2xl">
                <div className="appreciations-text md:flex gap-5 md:justify-end font-semibold hidden">
                    <span>Très bien</span>
                    <span>Satisfaisant</span>
                    <span>À améliorer</span>
                    <span>Pas observé</span>
                </div>
                <div className="flex flex-col gap-6 md:gap-0">
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Habile</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="skillful-really-good">Très bien</label>
                                <input name="skillful" id="skillful-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="skillful-satisfying">Satisfaisant</label>
                                <input name="skillful" id="skillful-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="skillful-to-upgrade">À améliorer</label>
                                <input name="skillful" id="skillful-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="skillful-not-observed">Pas observé</label>
                                <input name="skillful" id="skillful-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Rapide</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="fast-really-good">Très bien</label>
                                <input name="fast" id="fast-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="fast-satisfying">Satisfaisant</label>
                                <input name="fast" id="fast-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="fast-to-upgrade">À améliorer</label>
                                <input name="fast" id="fast-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="fast-not-observed">Pas observé</label>
                                <input name="fast" id="fast-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Soigneux-se</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="careful-really-good">Très bien</label>
                                <input name="careful" id="careful-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="careful-satisfying">Satisfaisant</label>
                                <input name="careful" id="careful-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="careful-to-upgrade">À améliorer</label>
                                <input name="careful" id="careful-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="careful-not-observed">Pas observé</label>
                                <input name="careful" id="careful-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Méthodique</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="methodical-really-good">Très bien</label>
                                <input name="methodical" id="methodical-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="methodical-satisfying">Satisfaisant</label>
                                <input name="methodical" id="methodical-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="methodical-to-upgrade">À améliorer</label>
                                <input name="methodical" id="methodical-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="methodical-not-observed">Pas observé</label>
                                <input name="methodical" id="methodical-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Persévérant-e</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="persevering-really-good">Très bien</label>
                                <input name="persevering" id="persevering-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="persevering-satisfying">Satisfaisant</label>
                                <input name="persevering" id="persevering-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="persevering-to-upgrade">À améliorer</label>
                                <input name="persevering" id="persevering-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="persevering-not-observed">Pas observé</label>
                                <input name="persevering" id="persevering-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Attentif-ve</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="attentive-really-good">Très bien</label>
                                <input name="attentive" id="attentive-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="attentive-satisfying">Satisfaisant</label>
                                <input name="attentive" id="attentive-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="attentive-to-upgrade">À améliorer</label>
                                <input name="attentive" id="attentive-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="attentive-not-observed">Pas observé</label>
                                <input name="attentive" id="attentive-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Comprend rapidement les consignes</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="understands-fast-really-good">Très bien</label>
                                <input name="understands-fast" id="understands-fast-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="understands-fast-satisfying">Satisfaisant</label>
                                <input name="understands-fast" id="understands-fast-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="understands-fast-to-upgrade">À améliorer</label>
                                <input name="understands-fast" id="understands-fast-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="understands-fast-not-observed">Pas observé</label>
                                <input name="understands-fast" id="understands-fast-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="observations-remarks mt-6 max-w-4xl whitespace-nowrap">
                <div className="w-full">
                    <div className="flex flex-col md:flex-row whitespace-nowrap w-full">
                        Remarques / Observations&nbsp;
                        <textarea className="w-full box-border resize-none overflow-y-hidden" placeholder={".".repeat(500)}></textarea>
                    </div>
                </div>
            </div>
            <EtatDeVaudSignature />
            {/* "CONTACT AVEC AUTRUI" SECTION */}
            <h2 className="contact-with-other section-title mt-8 text-3xl text-[#e42313]">CONTACT AVEC AUTRUI</h2>
            <div className="radios-section max-w-2xl">
                <div className="appreciations-text md:flex gap-5 md:justify-end font-semibold hidden">
                    <span>Très bien</span>
                    <span>Satisfaisant</span>
                    <span>À améliorer</span>
                    <span>Pas observé</span>
                </div>
                <div className="flex flex-col gap-6 md:gap-0">
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">À l&apos;aise dans les contacts</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="contact-easy-really-good">Très bien</label>
                                <input name="contact-easy" id="contact-easy-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="contact-easy-satisfying">Satisfaisant</label>
                                <input name="contact-easy" id="contact-easy-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="contact-easy-to-upgrade">À améliorer</label>
                                <input name="contact-easy" id="contact-easy-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="contact-easy-not-observed">Pas observé</label>
                                <input name="contact-easy" id="contact-easy-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Serviable</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="helpful-really-good">Très bien</label>
                                <input name="helpful" id="helpful-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="helpful-satisfying">Satisfaisant</label>
                                <input name="helpful" id="helpful-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="helpful-to-upgrade">À améliorer</label>
                                <input name="helpful" id="helpful-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="helpful-not-observed">Pas observé</label>
                                <input name="helpful" id="helpful-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Poli-e</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="polite-really-good">Très bien</label>
                                <input name="polite" id="polite-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="polite-satisfying">Satisfaisant</label>
                                <input name="polite" id="polite-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="polite-to-upgrade">À améliorer</label>
                                <input name="polite" id="polite-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="polite-not-observed">Pas observé</label>
                                <input name="polite" id="polite-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Souriant-e</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="smiling-really-good">Très bien</label>
                                <input name="smiling" id="smiling-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="smiling-satisfying">Satisfaisant</label>
                                <input name="smiling" id="smiling-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="smiling-to-upgrade">À améliorer</label>
                                <input name="smiling" id="smiling-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="smiling-not-observed">Pas observé</label>
                                <input name="smiling" id="smiling-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Ose poser des questions</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="asks-questions-really-good">Très bien</label>
                                <input name="asks-questions" id="asks-questions-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="asks-questions-satisfying">Satisfaisant</label>
                                <input name="asks-questions" id="asks-questions-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="asks-questions-to-upgrade">À améliorer</label>
                                <input name="asks-questions" id="asks-questions-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="asks-questions-not-observed">Pas observé</label>
                                <input name="asks-questions" id="asks-questions-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">Montre de l&apos;intérêt</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="shows-interest-really-good">Très bien</label>
                                <input name="shows-interest" id="shows-interest-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="shows-interest-satisfying">Satisfaisant</label>
                                <input name="shows-interest" id="shows-interest-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="shows-interest-to-upgrade">À améliorer</label>
                                <input name="shows-interest" id="shows-interest-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="shows-interest-not-observed">Pas observé</label>
                                <input name="shows-interest" id="shows-interest-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className="radio-inputs-and-titles flex flex-col w-full md:flex-row">
                        <h3 className="input-title font-bold text-xl md:text-base md:font-normal">S&apos;exprime clairement</h3>
                        <div className="flex max-[369px]:flex-col min-[370px]:flex-wrap md:flex-row gap-2 md:gap-0 md:ml-auto mr-auto md:mr-0">
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="express-clearly-really-good">Très bien</label>
                                <input name="express-clearly" id="express-clearly-really-good" className="radio-input md:mr-[73px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="express-clearly-satisfying">Satisfaisant</label>
                                <input name="express-clearly" id="express-clearly-satisfying" className="radio-input md:mr-[85px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="express-clearly-to-upgrade">À améliorer</label>
                                <input name="express-clearly" id="express-clearly-to-upgrade" className="radio-input md:mr-[87px]" type="radio" />
                            </div>
                            <div className="flex flex-[1_1_45%] md:flex-none gap-2">
                                <label className="block md:hidden" htmlFor="express-clearly-not-observed">Pas observé</label>
                                <input name="express-clearly" id="express-clearly-not-observed" className="radio-input md:mr-7" type="radio" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="observations-remarks mt-6 max-w-4xl whitespace-nowrap">
                <div className="w-full">
                    <div className="flex flex-col md:flex-row whitespace-nowrap w-full">
                        Remarques / Observations&nbsp;
                        <textarea className="w-full box-border resize-none overflow-y-hidden" placeholder={".".repeat(500)}></textarea>
                    </div>
                </div>
            </div>
            {/* "AVIS DE LA PERSONNE RESPONSABLE DU STAGE" SECTION */}
            <h2 className="section-title mt-8 text-3xl text-[#e42313]">AVIS DE LA PERSONNE RESPONSABLE DU STAGE</h2>
            <div className="text-semibold mt-4">
                <p className="mb-4">A votre avis, le projet de formation dans ce métier est :</p>
                <div>
                    <div className="dotted-input-text flex flex-row gap-2">
                        <input name="apprenticeship-job" id="apprenticeship-job-adequate" className="radio-input" type="radio" />
                        <label htmlFor="apprenticeship-job-adequate">Adéquat</label>
                    </div>
                    <div className="dotted-input-text flex flex-row gap-2">
                        <input name="apprenticeship-job" id="apprenticeship-job-to-precise" className="radio-input" type="radio" />
                        <label htmlFor="apprenticeship-job-to-precise">À préciser</label>
                    </div>
                    <div className="dotted-input-text flex flex-row gap-2">
                        <input name="apprenticeship-job" id="apprenticeship-job-not-adequate" className="radio-input" type="radio" />
                        <label htmlFor="apprenticeship-job-not-adequate">Pas adéquat</label>
                    </div>
                </div>
            </div>
            <div className="observations-remarks mt-6 max-w-4xl whitespace-nowrap">
                <div className="w-full">
                    <div className="flex whitespace-nowrap w-full">
                        Remarques&nbsp;
                        <input type="text" className="w-full box-border" placeholder={".".repeat(500)}></input>
                    </div>
                </div>
            </div>
            <div className="less-margin-top text-semibold mt-12 max-w-4xl">
                <p className="mb-4">Que conseillez-vous à ce ou à cette stagiaire par rapport à son projet ?</p>
                <div>
                    <div className="dotted-input-text flex flex-row gap-2">
                        <input name="tip-to-internship-project" id="tip-to-internship-project-find-apprenticeship" className="radio-input" type="radio" />
                        <label htmlFor="tip-to-internship-project-find-apprenticeship">Chercher une place d&apos;apprentissage</label>
                    </div>
                    <div className="dotted-input-text flex flex-row gap-2">
                        <input name="tip-to-internship-project" id="tip-to-internship-project-another-internship" className="radio-input" type="radio" />
                        <label htmlFor="tip-to-internship-project-another-internship">Faire un autre stage</label>
                    </div>
                    <div className="dotted-input-text flex flex-row gap-2">
                        <input name="tip-to-internship-project" id="tip-to-internship-project-explore-jobs" className="radio-input" type="radio" />
                        <label htmlFor="tip-to-internship-project-explore-jobs">Continuer à explorer les métiers</label>
                    </div>
                    <div className="dotted-input-text flex flex-row gap-2">
                        <input name="tip-to-internship-project" id="tip-to-internship-project-other" className="radio-input" type="radio" />
                        <label htmlFor="tip-to-internship-project-other" className="whitespace-nowrap">Autre (préciser)</label>
                        <input type="text" className="w-full box-border" placeholder={".".repeat(500)}></input>
                    </div>
                </div>
            </div>
            <div className="less-margin-top text-semibold mt-12 max-w-4xl">
                <p className="mb-4">Dans le cas où ce ou cette stagiaire envisage une formation dans ce métier, quels conseils particuliers lui donneriez-vous ?</p>
                <textarea className="observations-remarks resize-none w-full" placeholder={".".repeat(500)}></textarea>
            </div>
            <div className="less-margin-top text-semibold mt-12 max-w-4xl">
                <p className="mb-4">Si vous envisagiez d’engager un-e apprenti-e, prendriez-vous ce ou cette stagiaire en formation ?</p>
                <div>
                    <div className="dotted-input-text flex flex-row gap-2">
                        <input name="take-this-intern" id="take-this-intern-yes" className="radio-input" type="radio" />
                        <label htmlFor="take-this-intern-yes">Oui. Pourquoi ?</label>
                    </div>
                    <div className="dotted-input-text flex flex-row gap-2">
                        <input name="take-this-intern" id="take-this-intern-maybe" className="radio-input" type="radio" />
                        <label htmlFor="take-this-intern-maybe">Peut-être. Pourquoi ?</label>
                    </div>
                    <div className="dotted-input-text flex flex-row gap-2">
                        <input name="take-this-intern" id="take-this-intern-no" className="radio-input" type="radio" />
                        <label htmlFor="take-this-intern-no">Non. Pourquoi ?</label>
                    </div>
                </div>
            </div>
            <div className="text-semibold mt-4 max-w-4xl">
                <textarea className="observations-remarks resize-none w-full" rows={2} placeholder={".".repeat(500)}></textarea>
            </div>
            <div className="take-time flex flex-col lg:flex-row lg:max-w-4xl mt-12 gap-16">
                <div className="lg:w-3/5">
                    Avez-vous pu prendre du temps avec le ou la stagiaire pour faire le bilan
                    des quelques jours passés dans votre entreprise ou établissement ?
                    <div className="flex gap-2 mt-4">
                        <div className="date-signature flex flex-col gap-10">
                            <div className="dotted-input-text flex flex-row gap-2">
                                <input name="take-time" id="take-time-yes" className="radio-input" type="radio" />
                                <label htmlFor="take-time-yes">Oui</label>
                            </div>
                            <div className="dotted-input-text flex flex-row gap-2">
                                <label htmlFor="date">Date</label>
                                <input name="date" id="date" className="w-2/3" type="text" placeholder={".".repeat(500)} />
                            </div>
                        </div>
                        <div className="date-signature flex flex-col gap-10">
                            <div className="dotted-input-text flex flex-row gap-2">
                                <input name="take-time" id="take-time-no" className="radio-input" type="radio" />
                                <label htmlFor="take-time-no">Non</label>
                            </div>
                            <div className="dotted-input-text flex flex-row gap-2">
                                <label htmlFor="signature">Signature</label>
                                <input name="signature" id="Signature" className="w-2/3" type="text" placeholder={".".repeat(500)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intern-note-box dotted-box border-[3px] border-dotted border-[#e42313] px-4 py-3 max-w-md lg:w-2/5 lg:h-[110px]">
                    <h3 className="intern-note-title text-base font-semibold text-[#eb2313]">NOTE À L’INTENTION DU / DE LA STAGIAIRE</h3>
                    <p className="text-sm p-0">Ce rapport de stage est à conserver précieusement.
                        Une copie peut être jointe au dossier de candidature pour une place d’apprentissage.
                    </p>
                </div>
            </div>
            <EtatDeVaudSignature />
        </div>
    )
}