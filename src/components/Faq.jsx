import { Accordion } from "flowbite-react";
import React, { Component } from "react";

/* import data */
import { listfaq } from "./../data/listfaq";

class Faq extends Component {
  render() {
    return (
      <div>
        <Accordion className="w-full lg:w-accordion mt-6">
          {listfaq.map((item) => (
            <Accordion.Panel>
              <Accordion.Title>{item.question}</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-900">{item.answare}</p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    );
  }
}

export default Faq;
