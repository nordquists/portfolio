import React, { useEffect, useState } from 'react'
import { POST } from '../../utils/Networking'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import { H4, HR, TruecasedText, ContainerDescription } from '../../elements';
import { InlineContainer } from '../InlineContainer';
import theme from '../../themes/theme';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFilledInput-root': {
            borderRadius: '4px',
            minWidth: '300px',
            height : '50px',
            background: 'none'
            // [theme.breakpoints.up(2161)]: {
            //     borderRadius: '8px',
            //     height : '70px',
            //     width : '20vw',
            //   },
        },
        '& .MuiFilledInput-underline:after': {
            borderBottom: 'none',
        },
        '& .MuiFilledInput-underline:before': {
            borderBottom: 'none',
        },
        '& .MuiFilledInput-input': {
            paddingTop: '10px',
            fontFamily: 'Inter',
            fontSize : '1.5rem',
            // [theme.breakpoints.up(2161)]: {
            //     fontSize : '1.5rem',
            //   },
        
        },
        '& .MuiFormLabel-root.Mui-focused': {
            display: 'none',
            transition: '0'
        },
    }
}))

export const Truecaser = () => {
    const [text, setText] = useState("")
    const [truecasedText, setTruecasedText] = useState("")
    const [didMountInput, setDidMountInput] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const classes = useStyles()

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if(didMountInput) {
                request(text)
            } else {
                setDidMountInput(true)
            }
          }, 600)

        return () => clearTimeout(delayDebounce)      
    }, [text])

    async function request(input) {
        setLoading(true)
        // const result = await POST('/truecaser', {
        //     input: input
        // })

        // if (result) {
        //     setTruecasedText(result)
        // } else {
        //     setTruecasedText('')
        //     setError(true)
        // }

        setLoading(false)
    }

    return (
        <InlineContainer color={theme.colors.light1}>
            {/* <ContainerDescription>
                I hosted a minified version of the HMM model online to demonstrate how it works. 
            </ContainerDescription> */}
            <H4 margin="0 0 10px 10px">Truecaser demo</H4> 
            <TextField 
                fullWidth
                className={classes.root}
                placeholder="Type something here..."
                onChange={e => setText(e.target.value)}
                variant="filled"
                spellCheck="false"
            />
            <HR/>
            <TruecasedText>
                { text }
                { text === '' && "Output will appear here"}
            </TruecasedText>

        </InlineContainer>
    )
}

