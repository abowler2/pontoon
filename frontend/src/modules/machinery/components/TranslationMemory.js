/* @flow */

import React from 'react';
import { Localized } from '@fluent/react';

type Props = {|
    itemCount?: number,
    projectName?: string,
|};

/**
 * Show the translation source from Pontoon's memory.
 */
export default function TranslationMemory(props: Props) {
    const projectName = props.projectName
        ? props.projectName.toUpperCase()
        : 'Translation Memory';

    return (
        <li>
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
                    onClick={(e: SyntheticMouseEvent<>) => e.stopPropagation()}
                >
                    <Localized
                        id='machinery-TranslationMemory--translation-memory'
                        vars={{ projectName: projectName }}
                    >
                        <span>{'{ $projectName }'}</span>
                    </Localized>
                    {!props.itemCount ? null : (
                        <Localized
                            id='machinery-TranslationMemory--number-occurrences'
                            attrs={{ title: true }}
                        >
                            <sup title='Number of translation occurrences'>
                                {props.itemCount}
                            </sup>
                        </Localized>
                    )}
                </a>
            </Localized>
        </li>
    );
}
