import { Vue, Component, Prop } from 'vue-property-decorator'

export default interface User {
	firstName: string
	lastName: string
	age: number
}

@Component
export class YourComponent extends Vue {
	@Prop({ type: Object, required: true }) readonly user!: User

	message: string = 'This is a message'

	get fullName(): string {
		return `${this.user.firstName} ${this.user.lastName}`
	}
}
