import React, {Component} from 'react';
import {
  DataTable,
  Link
} from '@shopify/polaris';
import ExpositionIcon from './ExpositionIcon.js';

class ExpositionList extends Component {
  render() {
    const rows = [
      [<ExpositionIcon></ExpositionIcon>, 'Jan 18, 2018', 'Jan 23, 2018',
       <Link url="https://www.example.com">View</Link>,
       <Link url="https://www.example.com">View</Link>,
       <Link url="https://www.example.com">View</Link>
      ],
      [<ExpositionIcon></ExpositionIcon>, 'Jan 6, 2018', 'Jan 12, 2018',
       <Link url="https://www.example.com">View</Link>,
       <Link url="https://www.example.com">View</Link>,
       <Link url="https://www.example.com">View</Link>],
    ];

    return (
        <DataTable
            columnContentTypes={[
              'text',
              'text',
              'text',
              'text',
              'text',
              'text'
            ]}
            headings={[
              'Exposition',
              'Assembly',
              'Disassembly',
              'Decoration Rules',
              'Technical Guide',
              'Plan'
            ]}
            rows={rows}
        />
    );
  }
}

export default ExpositionList;
