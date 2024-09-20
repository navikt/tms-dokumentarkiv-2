import { format } from "date-fns";
import Dokument from "../dokument/Dokument";
import DokumentUtenTilgang from "../dokument/DokumentUtenTilgang";
import type { JournalpostProps } from "../DokumentInterfaces";
import Vedlegg from "../vedlegg/Vedlegg";
import styles from "./Journalpost.module.css";
import type { Language } from "@language/language";

interface Props {
  journalpost: JournalpostProps;
  language: Language;
}

const Journalpost = ({ journalpost, language }: Props) => {
  const dato = format(new Date(journalpost.opprettet), "dd.MM.yyyy");
  
  return (
    <li className={styles.container} key={journalpost.journalpostId}>
      {journalpost.dokument.brukerHarTilgang ? (
        <Dokument
          dokument={journalpost.dokument}
          dato={dato}
          avsender={journalpost.avsendernavn}
          mottaker={journalpost.mottakernavn}
          journalpostId={journalpost.journalpostId}
          language={language}
        />
      ) : (
        <DokumentUtenTilgang
          dokument={journalpost.dokument}
          dato={dato}
          avsender={journalpost.avsendernavn}
          mottaker={journalpost.mottakernavn}
          language={language}
        />
      )}
      <Vedlegg vedleggsListe={journalpost.vedlegg} journalpostId={journalpost.journalpostId} language={language}/>
    </li>
  );
};

export default Journalpost;
