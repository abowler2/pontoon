/* @flow */

import React from 'react';

import type { MachineryTranslation } from 'core/api';
import type { Locale } from 'core/locale';

import ConcordanceSearch from './source/ConcordanceSearch';
import GoogleTranslation from './source/GoogleTranslation';
import MicrosoftTranslation from './source/MicrosoftTranslation';
import SystranTranslation from './source/SystranTranslation';
import MicrosoftTerminology from './source/MicrosoftTerminology';
import TransvisionMemory from './source/TransvisionMemory';
import CaighdeanTranslation from './source/CaighdeanTranslation';
import TranslationMemory from './source/TranslationMemory';

type Props = {|
    translation: MachineryTranslation,
    locale: Locale,
|};

/**
 * Shows a list of translation sources.
 */
export default function TranslationSource({ translation, locale }: Props) {
    const translationSource = translation.sources.map((source, index) => {
        switch (source) {
            case 'concordance-search':
                return !translation.projectName ? (
                    <ConcordanceSearch key={index} />
                ) : (
                    translation.projectName.map((project) => {
                        return (
                            <ConcordanceSearch
                                projectName={project}
                                key={index}
                            />
                        );
                    })
                );
            case 'translation-memory':
                return (
                    <TranslationMemory
                        itemCount={translation.itemCount}
                        key={index}
                    />
                );
            case 'google-translate':
                return <GoogleTranslation key={index} />;
            case 'microsoft-translator':
                return <MicrosoftTranslation key={index} />;
            case 'systran-translate':
                return <SystranTranslation key={index} />;
            case 'microsoft-terminology':
                return (
                    <MicrosoftTerminology
                        original={translation.original}
                        locale={locale}
                        key={index}
                    />
                );
            case 'transvision':
                return (
                    <TransvisionMemory
                        original={translation.original}
                        locale={locale}
                        key={index}
                    />
                );
            case 'caighdean':
                return <CaighdeanTranslation key={index} />;
            default:
                return null;
        }
    });

    return <ul className='sources'>{translationSource}</ul>;
}
