//import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {title, description, brands} = aboutData;

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {brands.map((brand, index) => (
            <a key={index} href={brand.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center">
              <div className="w-32 h-32 relative">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="mt-2 text-white font-semibold">{brand.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;