import React from 'react'
import { H4, P, HR, ProgressBar, ProgressBarInner, MachineOutputSubExample, MachineOutputWrapper } from '../../elements'

export const MachineOutput = ({ example_num, text, examples }) => {
    return (
        <MachineOutputWrapper>
            <H4>Example {example_num}</H4>
            <P
                size='medium'
                weight='thin'
            >
                {text}
            </P>
            <HR/>

            {examples.map(example => {
                return (
                    <MachineOutputSubExample key={example.id}>
                        <P
                            margin="10px 0 0 0"
                            size='xsmall'
                            weight='thin'
                            dangerouslySetInnerHTML={{__html: example.text + ` (${example.percent}%)`}}
                        />
                        <ProgressBar>
                            <ProgressBarInner
                                color="#4EA1DD"
                                percent={example.percent}
                            />
                        </ProgressBar>
                    </MachineOutputSubExample>
                )
            })}
        </MachineOutputWrapper> 
    )
}
