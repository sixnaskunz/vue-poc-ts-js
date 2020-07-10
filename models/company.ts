/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line no-unused-vars
export default class Company {
	companyName: string
	address: string

	constructor(companyName: string, address: string) {
		this.companyName = companyName
		this.address = address
	}

	getCompanyName() {
		return this.companyName
	}
}
