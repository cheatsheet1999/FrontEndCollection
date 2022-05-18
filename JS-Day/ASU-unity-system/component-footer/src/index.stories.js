import React from "react";

import { ASUFooter } from ".";

import endorsedLogo from "./endorsedLogo.png";

export default {
  title: "UDS/ASU Footer",
  component: ASUFooter,
};

/* eslint-disable-next-line react/jsx-props-no-spreading */
const Template = args => <ASUFooter {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const UnitLogo = Template.bind({});
UnitLogo.args = {
  social: {
    unitLogo: endorsedLogo,
    mediaLinks: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com/?lang=en",
      instagram: "https://instagram.com",
      linkedIn: "https://www.linkedin.com/",
      youtube: "https://www.youtube.com/",
    },
  },
};

export const OneColumnNoLogo = Template.bind({});
OneColumnNoLogo.args = {
  contact: {
    title: "Complete Name of College, School or Unit Title Should Go Here",
    contactLink: "#",
    contributionLink: "#",
  },
};

export const OneColumn = Template.bind({});
OneColumn.args = {
  ...UnitLogo.args,
  ...OneColumnNoLogo.args,
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  ...OneColumn.args,
  contact: {
    ...OneColumn.args.contact,
    columns: [
      {
        title: "Column Two",
        links: [
          {
            url: "#",
            title: "link",
            text: "Biological and Health Systems Computing",
          },
          {
            url: "#",
            title: "link",
            text: "Informatics and Decision Systems Electrical",
          },
          {
            url: "#",
            title: "link",
            text: "Computer and Energy Matter",
          },
          {
            url: "#",
            title: "link",
            text:
              "Transport and Energy Sustainability and the Built Environment",
          },
          {
            url: "#",
            title: "link",
            text: "The Polytechnic School",
          },
        ],
      },
    ],
  },
};

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
  ...TwoColumns.args,
  contact: {
    ...TwoColumns.args.contact,
    columns: [
      ...TwoColumns.args.contact.columns,
      {
        title: "Column Three",
        links: [
          {
            url: "#",
            title: "link",
            text: "Biological and Health Systems Computing",
          },
          {
            url: "#",
            title: "link",
            text: "Informatics and Decision Systems Electrical",
          },
          {
            url: "#",
            title: "link",
            text: "Computer and Energy Matter",
          },
          {
            url: "#",
            title: "link",
            text:
              "Transport and Energy Sustainability and the Built Environment",
          },
          {
            url: "#",
            title: "link",
            text: "The Polytechnic School",
          },
        ],
      },
    ],
  },
};

export const FourColumns = Template.bind({});
FourColumns.args = {
  ...ThreeColumns.args,
  contact: {
    ...ThreeColumns.args.contact,
    columns: [
      ...ThreeColumns.args.contact.columns,
      {
        title: "Column Four",
        links: [
          {
            url: "#",
            title: "link",
            text: "Biological and Health Systems Computing",
          },
          {
            url: "#",
            title: "link",
            text: "Informatics and Decision Systems Electrical",
          },
          {
            url: "#",
            title: "link",
            text: "Computer and Energy Matter",
          },
          {
            url: "#",
            title: "link",
            text:
              "Transport and Energy Sustainability and the Built Environment",
          },
          {
            url: "#",
            title: "link",
            text: "The Polytechnic School",
          },
        ],
      },
    ],
  },
};

const FiveColumns = Template.bind({});
FiveColumns.args = {
  ...FourColumns.args,
  contact: {
    ...FourColumns.args.contact,
    columns: [
      ...FourColumns.args.contact.columns,
      {
        title: "Column Five",
        links: [
          {
            url: "#",
            title: "link",
            text: "Biological and Health Systems Computing",
          },
          {
            url: "#",
            title: "link",
            text: "Informatics and Decision Systems Electrical",
          },
          {
            url: "#",
            title: "link",
            text: "Computer and Energy Matter",
          },
          {
            url: "#",
            title: "link",
            text:
              "Transport and Energy Sustainability and the Built Environment",
          },
          {
            url: "#",
            title: "link",
            text: "The Polytechnic School",
          },
        ],
      },
    ],
  },
};

export const SixColumns = Template.bind({});
SixColumns.args = {
  ...FiveColumns.args,
  contact: {
    ...FiveColumns.args.contact,
    columns: [
      ...FiveColumns.args.contact.columns,
      {
        title: "Column Six",
        links: [
          {
            url: "#",
            title: "link",
            text: "Biological and Health Systems Computing",
          },
          {
            url: "#",
            title: "link",
            text: "Informatics and Decision Systems Electrical",
          },
          {
            url: "#",
            title: "link",
            text: "Computer and Energy Matter",
          },
          {
            url: "#",
            title: "link",
            text:
              "Transport and Energy Sustainability and the Built Environment",
          },
          {
            url: "#",
            title: "link",
            text: "The Polytechnic School",
          },
        ],
      },
    ],
  },
};
