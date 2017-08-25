import React from 'react';
import styled from 'styled-components';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';

const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;

const msg = () => console.log('clicked');

const BaseContainer = props =>
    <div
        style={{
            display: 'inline-block',
            paddingTop: 16,
            paddingBottom: 16,
            fontFamily: 'Roboto',
            width: 240,
            ...props.style
        }}
    >
        {props.children}
    </div>;

const Title = styled.div`
    padding: 12px;
`;

const BasicSideNav = () =>
    <SideNav highlightBgColor="#00bcd4" defaultSelected="latest">
        <Title> Exchange Rates Services </Title>
        <Nav id="query">
            <NavIcon><Icon20 icon={ic_format_list_bulleted} /></NavIcon>
            <NavText> Exchange Rates Query </NavText>
            <Nav id="latest" onNavClick={msg}>
                <NavIcon><Icon20 size={16} icon={ic_business} /></NavIcon>
                <NavText> Latest </NavText>
            </Nav>
            <Nav id="historical" onNavClick={msg}>
                <NavIcon><Icon20 size={16} icon={ic_business_center} /></NavIcon>
                <NavText> Historical </NavText>
            </Nav>
        </Nav>
    </SideNav>;

const RatesSideMenu = () =>
    <div style={{ display: 'flex' }}>
	<BaseContainer style={{ background: '#ffffff', color: '#444', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
	    <BasicSideNav />
	</BaseContainer>
    </div>;

export default RatesSideMenu;
