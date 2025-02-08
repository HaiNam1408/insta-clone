import styled, { css } from 'styled-components';
import { APP_COLORS, APP_FONTS } from '../../themes';

export const StyledTypo = {
  fontInter: () => css`
    font-family: 'Inter', 'Helvetica', 'Arial', sans-serif;
  `,
  fontStyle: ({
    fontWeight = 600,
    fontSize = APP_FONTS['7xl'],
    lineHeight = 1.1,
    textColor
  }) => css`
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    line-height: ${lineHeight};
    color: ${textColor};
  `,

  heading1: ({ color = APP_COLORS.white }) => css`
    ${StyledTypo.fontInter()}
    ${StyledTypo.fontStyle({ textColor: color })}
  `,

  heading2: ({ color = APP_COLORS.white }) => css`
    ${StyledTypo.fontInter()}
    ${StyledTypo.fontStyle({
      fontSize: APP_FONTS['3xl'],
      lineHeight: 1.2,
      textColor: color
    })}
  `,

  heading3: ({ color = APP_COLORS.white }) => css`
    ${StyledTypo.fontInter()}
    ${StyledTypo.fontStyle({
      fontSize: APP_FONTS['2xl'],
      lineHeight: 1.25,
      textColor: color
    })}
  `,

  heading4: ({ color = APP_COLORS.white, lineHeight = 1.4 }) => css`
    ${StyledTypo.fontInter()}
    ${StyledTypo.fontStyle({ fontSize: APP_FONTS.xl, lineHeight, textColor: color })}
  `,

  heading5: ({ color = APP_COLORS.white, fontWeight = 600 }) => css`
    ${StyledTypo.fontInter()}
    ${StyledTypo.fontStyle({
      fontWeight,
      fontSize: APP_FONTS.base,
      lineHeight: 1.5,
      textColor: color
    })}
  `,

  heading6: ({ color = APP_COLORS.white, fontWeight = 600 }) => css`
    ${StyledTypo.fontInter()}
    ${StyledTypo.fontStyle({
      fontWeight,
      fontSize: APP_FONTS.md,
      lineHeight: 1.5,
      textColor: color
    })}
  `,

  heading7: ({ color = APP_COLORS.white, fontWeight = 500 }) => css`
    ${StyledTypo.fontInter()}
    ${StyledTypo.fontStyle({
      fontWeight,
      fontSize: APP_FONTS.sm,
      lineHeight: 1.5,
      textColor: color
    })}
  `,

  textBodyBig: ({ color = APP_COLORS.white }) => css`
    ${StyledTypo.fontInter()}
    ${StyledTypo.fontStyle({
      fontWeight: 400,
      fontSize: APP_FONTS.xl,
      lineHeight: 1.15,
      textColor: color
    })}
  `,
  textBody: ({ color = APP_COLORS.white }) => css`
    ${StyledTypo.fontInter()}
    ${StyledTypo.fontStyle({
      fontWeight: 400,
      fontSize: APP_FONTS.base,
      lineHeight: 1.5,
      textColor: color
    })}
  `,

  textBody2: ({ color = APP_COLORS.white }) => css`
    ${StyledTypo.fontInter()}
    ${StyledTypo.fontStyle({
      fontWeight: 400,
      fontSize: APP_FONTS.md,
      lineHeight: 1.15,
      textColor: color
    })}
  `,

  textBody3: ({ color = APP_COLORS.white }) => css`
    ${StyledTypo.fontInter()}
    ${StyledTypo.fontStyle({
      fontWeight: 400,
      fontSize: APP_FONTS.sm,
      lineHeight: 1.2,
      textColor: color
    })}
  `,

  textThin: ({ color = APP_COLORS.white }) => css`
    ${StyledTypo.fontInter()}
    ${StyledTypo.fontStyle({
      fontWeight: 300,
      fontSize: APP_FONTS.sm,
      lineHeight: 1.2,
      textColor: color
    })}
  `
};
