import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BlogItem from './BlogItem';
import { blogs } from './Data';
import DoubleArrowTwoToneIcon from '@mui/icons-material/DoubleArrowTwoTone';


const FeatureHeaderContainer = styled.div`
/* background-color: pink; */
width: 100%;
padding: 3rem 0 calc(3rem - 20px) 0;
`

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const SubTitle = styled.p`
/* background-color: orange; */
text-transform: uppercase;
font-size: 12px;
padding: 10px 10px 5px 10px;
color: #848484;
`

const Underline = styled.div`
height: 1px;
width: 50px;
background-color: black;
`

const Title = styled(Link)`
/* background-color: blue; */
padding: 15px;
text-transform: uppercase;
text-decoration: none;
font-size: clamp(1.8rem, 4vw, 3rem);
font-weight: 800;
color:#CBBA9C;
transition: 0.3s ease-in-out;

&:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
}
`

const TitleInPage = styled.p`
/* background-color: blue; */
padding: 15px;
text-transform: uppercase;
font-size: clamp(1.8rem, 4vw, 3rem);
font-weight: 800;
color:#CBBA9C;
` 

const Span = styled.span`
color: black;
`

const Container = styled.div`
/* background-color: gray; */
padding: 0 2rem 3rem 2rem;
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const Blog = () => {

    const location = useLocation()

  return (
      <>
      <FeatureHeaderContainer>
                <Wrapper>
                    <SubTitle>Happenings around</SubTitle>
                    <Underline></Underline>
                    {location.pathname === "/" 
                    ? (
                        <Title to="/blogs">
                            Our <Span>blogs</Span>
                            <DoubleArrowTwoToneIcon style={{color:"black", marginLeft:"7px"}}/>
                        </Title> 
                    )
                    : (
                        <TitleInPage>
                            Our <Span>blogs</Span>
                        </TitleInPage> 
                        )   
                    }
                </Wrapper>
        </FeatureHeaderContainer>
        <Container>
            {location.pathname === "/"
            ? (
                <>
                    {blogs.slice(0,3).map(blog => (
                    <BlogItem key={blog.id} blog={blog}/>
                    ))}
                </>
            )
            : (
                <>
                    {blogs.map(blog => (
                        <BlogItem key={blog.id} blog={blog}/>
                    ))}
                </>
            )
            }
        </Container>
    </>
    );
};

export default Blog;
