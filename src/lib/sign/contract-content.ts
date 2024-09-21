interface ContractContent {
  title: string;
  content: string;
}

const insuranceContractContents: ContractContent[] = [
  {
    title: "Service Benefits",
    content: `The Company provides the Customer with the following Premium Insurance benefits:
  - Unlimited Collision Damage Waiver (CDW): The Customer's vehicle is protected with unlimited coverage for collision damage.
  - Theft Protection: The Customer's vehicle is protected with unlimited coverage for theft.
  - Deductible: $0 (Full Waiver): Up to $50,000 coverage in the event of vehicle theft.
  - 24/7 Roadside Assistance: The Customer has no deductible to pay in the event of an accident or theft. Full coverage is provided for all damages.
  - Legal Support for Theft and Accidents: The Company provides legal support for issues related to vehicle theft or accidents.`,
  },
  {
    title: "Contract Effectiveness and Termination",
    content: `This agreement becomes effective immediately upon the Customer's subscription to the Premium Service and signing of this contract.
  - Cancellation and Full Refund Within 24 Hours: The Customer must notify the Company immediately in the event of any accident or theft.
  - Partial Refund Policy: If the Customer terminates the service before the end of the subscription period, the Company will provide a partial refund based on the remaining time after the termination date. The refund amount will be calculated accordingly.`,
  },
  {
    title: "Responsibilities and Obligations",
    content: `The Company provides the Customer with the following Premium Insurance benefits:
  - The Customer must notify the Company immediately in the event of any accident or theft.
  - The Company will strive to protect the Customer's vehicle according to the provided benefits, and the Customer must adhere to all terms of this agreement.`,
  },
  {
    title: "Governing Law",
    content: `This agreement shall be governed by and construed in accordance with the laws of [Applicable State Law].`,
  },
  {
    title: "Signature",
    content: `By signing this agreement, the Customer acknowledges understanding and agreeing to all the terms and conditions outlined above.`,
  },
];

export default insuranceContractContents;