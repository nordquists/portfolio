import React from 'react'
import { H1, H2, PostComponent, PostFeatureWrapper, PostFeatureSection, PostWrapper, PostTitleSection, PostLinkSection, PostReadTimeAndDate, PostFeatureImage, LinkButton, P, CustomBreadcrumb, CustomBreadcrumbItem, PostBreadcrumb, FeatureImageWrapper } from '../elements'
import { Image } from '../components'

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

export const Post = (props) => {
    const date = new Date(props.post_data.date)
    const formatted_date = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

    return (
        <PostComponent>
            <PostFeatureWrapper gradient={props.post_data.gradient}>
                <PostFeatureSection>
                    <PostTitleSection>
                        <PostBreadcrumb>
                            <CustomBreadcrumb>
                                <CustomBreadcrumbItem>
                                    <a href={'/'}>Projects</a>
                                </CustomBreadcrumbItem>
                                <CustomBreadcrumbItem>
                                    {props.post_data.capitalized_slug}
                                </CustomBreadcrumbItem>
                            </CustomBreadcrumb>
                        </PostBreadcrumb>
                        <H1 color="dark1">{props.post_data.title}</H1>
                        <H2 margin="1rem 0 0 0" color="dark1">{props.post_data.subtitle}</H2>
                        <PostLinkSection>
                            { props.post_data.live_link != 'none' &&
                                <LinkButton href={props.post_data.live_link}>View Live</LinkButton>
                            }
                            { props.post_data.code_link != 'none' &&
                                <LinkButton href={props.post_data.code_link}>View Code</LinkButton>
                            }
                        </PostLinkSection>
                        <PostReadTimeAndDate>
                            <P size="xsmall" weight="normal" color="light2">{ formatted_date }</P>
                            {/* <P size="xsmall" weight="normal" color="light2">{ props.post_data.read_time }</P> */}
                        </PostReadTimeAndDate>
                    </PostTitleSection>
                    <FeatureImageWrapper>
                        <Image></Image>
                    </FeatureImageWrapper>
                </PostFeatureSection>
            </PostFeatureWrapper>
            <PostWrapper>
                {props.children}
            </PostWrapper>
        </PostComponent>
    )
}
