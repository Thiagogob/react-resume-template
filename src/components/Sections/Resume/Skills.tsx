// src/components/Sections/Skills.tsx

import {FC, memo} from 'react';
import Section from '../../Layout/Section'; 
import Image from 'next/image';
import {SectionId, skills} from '../../../data/data';

const Skills: FC = memo(() => {
  const {experienceText, stockText, wheelImage} = skills; // Remova 'title' daqui

  return (
    <Section className="bg-neutral-800 py-16" sectionId={SectionId.Skills}> {/* Ajustei o padding aqui */}
      <div className="mx-auto max-w-screen-lg flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        {/* Imagem da roda - Lado Esquerdo */}
        <div className="w-full md:w-1/2 flex justify-center">
          {wheelImage && (
            <div className="relative w-80 h-80 sm:w-96 sm:h-96"> {/* Tamanho fixo para a imagem */}
              <Image
                src={wheelImage}
                alt="Roda automotiva"
                layout="fill"
                objectFit="contain" // Ajusta a imagem para caber sem cortar
                className="rounded-lg shadow-xl"
              />
            </div>
          )}
        </div>

        {/* Textos - Lado Direito */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-2xl font-bold text-white mb-4">{experienceText}</p>
          <p className="text-3xl font-bold text-white">{stockText}</p>
        </div>
      </div>
    </Section>
  );
});

Skills.displayName = 'Skills';
export default Skills;