/* @flow */

import React from 'react';
import { Localized } from '@fluent/react';

type Props = {|
    itemCount?: number,
    projectName?: string,
    projectSlug?: string,
    entityPK?: number,
    localeCode?: string,
|};

/**
 * Show the translation source from Pontoon's memory.
 */
export default function TranslationMemory(props: Props) {
    const { itemCount, projectName, projectSlug, entityPK, localeCode } = props;
    const projectURL =
        projectSlug && entityPK && localeCode
            ? `/${localeCode}/${projectSlug}/all-resources/?string=${entityPK}`
            : '/';
    return (
        <li>
            {projectName ? (
                <Localized
                    id='machinery-TranslationMemory--open-project-string'
                    attrs={{ title: true }}
                    vars={{ projectName: projectName }}
                >
                    <a
                        className='translation-source'
                        href={projectURL}
                        title={`Open string in { $projectName }`}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e: SyntheticMouseEvent<>) =>
                            e.stopPropagation()
                        }
                    >
                        <span>{projectName.toUpperCase()}</span>
                    </a>
                </Localized>
            ) : (
                <Localized
                    id='machinery-TranslationMemory--pontoon-homepage'
                    attrs={{ title: true }}
                >
                    <a
                        className='translation-source'
                        href='/'
                        title='Pontoon Homepage'
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e: SyntheticMouseEvent<>) =>
                            e.stopPropagation()
                        }
                    >
                        <Localized id='machinery-TranslationMemory--translation-memory'>
                            <span>TRANSLATION MEMORY</span>
                        </Localized>
                        {!itemCount ? null : (
                            <Localized
                                id='machinery-TranslationMemory--number-occurrences'
                                attrs={{ title: true }}
                            >
                                <sup title='Number of translation occurrences'>
                                    {itemCount}
                                </sup>
                            </Localized>
                        )}
                    </a>
                </Localized>
            )}
        </li>
    );
}
