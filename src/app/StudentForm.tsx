"use client";

import React, { useState } from "react";
import {
	ChevronRight,
	ChevronLeft,
	User,
	Phone,
	Mail,
	Calendar,
	Globe,
	Home,
	MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

interface SelectProps {
	id: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	className: string;
	required: boolean;
	"aria-required": string;
}

interface SelectPropsWithId extends SelectProps {
	id: string;
}
import { Checkbox } from "@/components/ui/checkbox";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type FormData = {
	email: string;
	first_name: string;
	last_name: string;
	birth_date: string;
	phone_number: string;
	nationality: string;
	middle_name: string;
	marital_status: string;
	visa_details: string;
	visa_start_date: string;
	visa_end_date: string;
	entry_date: string;
	entry_airport: string;
	cur_address: {
		address1: string;
		address2: string;
		county: string;
		state: string;
		country: string;
	};
	per_address: {
		address1: string;
		address2: string;
		county: string;
		state: string;
		country: string;
	};
	same_as_current: boolean;
};

type OnSubmit = (formData: FormData) => void;

export default function StudentForm({ onSubmit }: { onSubmit: OnSubmit }) {
	const [formData, setFormData] = useState<FormData>({
		email: "",
		first_name: "",
		last_name: "",
		birth_date: "",
		phone_number: "",
		nationality: "",
		middle_name: "",
		marital_status: "",
		visa_details: "",
		visa_start_date: "",
		visa_end_date: "",
		entry_date: "",
		entry_airport: "",
		cur_address: {
			address1: "",
			address2: "",
			county: "",
			state: "",
			country: "",
		},
		per_address: {
			address1: "",
			address2: "",
			county: "",
			state: "",
			country: "",
		},
		same_as_current: false,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleAddressChange = (type: 'cur_address' | 'per_address', field: keyof FormData['cur_address'], value: string) => {
		setFormData((prevData) => ({
			...prevData,
			[type]: {
				...prevData[type],
				[field]: value,
			},
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(formData);
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
			<Card>
				<CardHeader>
					<CardTitle>Student Profile</CardTitle>
					<CardDescription>
						Please fill out your information. Fields marked with an asterisk (*)
						are mandatory.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Tabs defaultValue="basic" className="w-full">
						<TabsList className="grid w-full grid-cols-3">
							<TabsTrigger value="basic">Basic Info</TabsTrigger>
							<TabsTrigger value="additional">Additional Info</TabsTrigger>
							<TabsTrigger value="address">Address</TabsTrigger>
						</TabsList>
						<TabsContent value="basic">
							<div className="space-y-4 mt-4">
								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-2">
										<label htmlFor="first_name" className="text-sm font-medium">
											First Name *
										</label>
										<div className="relative">
											<User className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
											<Input
												id="first_name"
												name="first_name"
												value={formData.first_name}
												onChange={handleChange}
												className="pl-8"
												required
												aria-required="true"
											/>
										</div>
									</div>
									<div className="space-y-2">
										<label htmlFor="last_name" className="text-sm font-medium">
											Last Name *
										</label>
										<div className="relative">
											<User className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
											<Input
												id="last_name"
												name="last_name"
												value={formData.last_name}
												onChange={handleChange}
												className="pl-8"
												required
												aria-required="true"
											/>
										</div>
									</div>
								</div>
								<div className="space-y-2">
									<label htmlFor="email" className="text-sm font-medium">
										Email *
									</label>
									<div className="relative">
										<Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
										<Input
											id="email"
											name="email"
											type="email"
											value={formData.email}
											onChange={handleChange}
											className="pl-8"
											required
											aria-required="true"
										/>
									</div>
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-2">
										<label htmlFor="birth_date" className="text-sm font-medium">
											Date of Birth *
										</label>
										<div className="relative">
											<Calendar className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
											<Input
												id="birth_date"
												name="birth_date"
												type="date"
												value={formData.birth_date}
												onChange={handleChange}
												className="pl-8"
												required
												aria-required="true"
											/>
										</div>
									</div>
									<div className="space-y-2">
										<label
											htmlFor="phone_number"
											className="text-sm font-medium"
										>
											Phone Number *
										</label>
										<div className="relative">
											<Phone className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
											<Input
												id="phone_number"
												name="phone_number"
												value={formData.phone_number}
												onChange={handleChange}
												className="pl-8"
												required
												aria-required="true"
											/>
										</div>
									</div>
								</div>
								<div className="space-y-2">
									<label htmlFor="nationality" className="text-sm font-medium">
										Nationality *
									</label>
									<div className="relative">
										<Globe className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
										<Select
											id="nationality"
											name="nationality"
											value={formData.nationality}
											onChange={handleChange}
											className="pl-8"
											required
											aria-required="true"
										>
											<option value="">Select Nationality</option>
											<option value="US">United States</option>
											<option value="UK">United Kingdom</option>
											<option value="CA">Canada</option>
											<option value="AU">Australia</option>
											<option value="DE">Germany</option>
											<option value="FR">France</option>
											<option value="JP">Japan</option>
											<option value="CN">China</option>
											<option value="IN">India</option>
											<option value="BR">Brazil</option>
										</Select>
									</div>
								</div>
							</div>
						</TabsContent>
						<TabsContent value="additional">
							<div className="space-y-4 mt-4">
								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-2">
										<label
											htmlFor="middle_name"
											className="text-sm font-medium"
										>
											Middle Name (Optional)
										</label>
										<Input
											id="middle_name"
											name="middle_name"
											value={formData.middle_name}
											onChange={handleChange}
											aria-required="false"
										/>
									</div>
									<div className="space-y-2">
										<label
											htmlFor="marital_status"
											className="text-sm font-medium"
										>
											Marital Status (Optional)
										</label>
										<Select
											id="marital_status"
											name="marital_status"
											value={formData.marital_status}
											onChange={handleChange}
											aria-required="false"
										>
											<option value="">Select Marital Status</option>
											<option value="single">Single</option>
											<option value="married">Married</option>
											<option value="divorced">Divorced</option>
											<option value="widowed">Widowed</option>
											<option value="separated">Separated</option>
											<option value="other">Other</option>
										</Select>
									</div>
								</div>
								<div className="space-y-2">
									<label htmlFor="visa_details" className="text-sm font-medium">
										Visa Details (Optional)
									</label>
									<Input
										id="visa_details"
										name="visa_details"
										value={formData.visa_details}
										onChange={handleChange}
										aria-required="false"
									/>
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-2">
										<label
											htmlFor="visa_start_date"
											className="text-sm font-medium"
										>
											Visa Start Date (Optional)
										</label>
										<Input
											id="visa_start_date"
											name="visa_start_date"
											type="date"
											value={formData.visa_start_date}
											onChange={handleChange}
											aria-required="false"
										/>
									</div>
									<div className="space-y-2">
										<label
											htmlFor="visa_end_date"
											className="text-sm font-medium"
										>
											Visa End Date (Optional)
										</label>
										<Input
											id="visa_end_date"
											name="visa_end_date"
											type="date"
											value={formData.visa_end_date}
											onChange={handleChange}
											aria-required="false"
										/>
									</div>
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-2">
										<label htmlFor="entry_date" className="text-sm font-medium">
											Entry Date (Optional)
										</label>
										<Input
											id="entry_date"
											name="entry_date"
											type="date"
											value={formData.entry_date}
											onChange={handleChange}
											aria-required="false"
										/>
									</div>
									<div className="space-y-2">
										<label
											htmlFor="entry_airport"
											className="text-sm font-medium"
										>
											Entry Airport (Optional)
										</label>
										<Input
											id="entry_airport"
											name="entry_airport"
											value={formData.entry_airport}
											onChange={handleChange}
											aria-required="false"
										/>
									</div>
								</div>
							</div>
						</TabsContent>
						<TabsContent value="address">
							<div className="space-y-4 mt-4">
								<div className="space-y-2">
									<h3 className="text-lg font-semibold">Current Address *</h3>
									<div className="grid grid-cols-2 gap-4">
										<div className="space-y-2">
											<label
												htmlFor="cur_address.address1"
												className="text-sm font-medium"
											>
												Address Line 1 *
											</label>
											<div className="relative">
												<Home className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
												<Input
													id="cur_address.address1"
													name="cur_address.address1"
													value={formData.cur_address.address1}
													onChange={(e) =>
														handleAddressChange(
															"cur_address",
															"address1",
															e.target.value
														)
													}
													className="pl-8"
													required
													aria-required="true"
												/>
											</div>
										</div>
										<div className="space-y-2">
											<label
												htmlFor="cur_address.address2"
												className="text-sm font-medium"
											>
												Address Line 2 (Optional)
											</label>
											<Input
												id="cur_address.address2"
												name="cur_address.address2"
												value={formData.cur_address.address2}
												onChange={(e) =>
													handleAddressChange(
														"cur_address",
														"address2",
														e.target.value
													)
												}
												aria-required="false"
											/>
										</div>
									</div>
									<div className="grid grid-cols-3 gap-4">
										<div className="space-y-2">
											<label
												htmlFor="cur_address.county"
												className="text-sm font-medium"
											>
												County *
											</label>
											<Input
												id="cur_address.county"
												name="cur_address.county"
												value={formData.cur_address.county}
												onChange={(e) =>
													handleAddressChange(
														"cur_address",
														"county",
														e.target.value
													)
												}
												required
												aria-required="true"
											/>
										</div>
										<div className="space-y-2">
											<label
												htmlFor="cur_address.state"
												className="text-sm font-medium"
											>
												State *
											</label>
											<Input
												id="cur_address.state"
												name="cur_address.state"
												value={formData.cur_address.state}
												onChange={(e) =>
													handleAddressChange(
														"cur_address",
														"state",
														e.target.value
													)
												}
												required
												aria-required="true"
											/>
										</div>
										<div className="space-y-2">
											<label
												htmlFor="cur_address.country"
												className="text-sm font-medium"
											>
												Country *
											</label>
											<div className="relative">
												<MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
												<Input
													id="cur_address.country"
													name="cur_address.country"
													value={formData.cur_address.country}
													onChange={(e) =>
														handleAddressChange(
															"cur_address",
															"country",
															e.target.value
														)
													}
													className="pl-8"
													required
													aria-required="true"
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="space-y-2">
									<h3 className="text-lg font-semibold">Permanent Address</h3>
									<div className="flex items-center space-x-2">
										<Checkbox
											id="same_as_current"
											name="same_as_current"
											checked={formData.same_as_current}
											onCheckedChange={(checked) => {
												const isChecked = !!checked; // Ensure it's a boolean
												setFormData((prevData) => ({
													...prevData,
													same_as_current: isChecked,
													per_address: isChecked
														? { ...prevData.cur_address }
														: prevData.per_address,
												}));
											}}
										/>
										<label
											htmlFor="same_as_current"
											className="text-sm font-medium"
										>
											Same as Current Address
										</label>
									</div>
									{!formData.same_as_current && (
										<>
											<div className="grid grid-cols-2 gap-4">
												<div className="space-y-2">
													<label
														htmlFor="per_address.address1"
														className="text-sm font-medium"
													>
														Address Line 1 *
													</label>
													<div className="relative">
														<Home className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
														<Input
															id="per_address.address1"
															name="per_address.address1"
															value={formData.per_address.address1}
															onChange={(e) =>
																handleAddressChange(
																	"per_address",
																	"address1",

																	e.target.value
																)
															}
															className="pl-8"
															required
															aria-required="true"
														/>
													</div>
												</div>
												<div className="space-y-2">
													<label
														htmlFor="per_address.address2"
														className="text-sm font-medium"
													>
														Address Line 2 (Optional)
													</label>
													<Input
														id="per_address.address2"
														name="per_address.address2"
														value={formData.per_address.address2}
														onChange={(e) =>
															handleAddressChange(
																"per_address",
																"address2",
																e.target.value
															)
														}
														aria-required="false"
													/>
												</div>
											</div>
											<div className="grid grid-cols-3 gap-4">
												<div className="space-y-2">
													<label
														htmlFor="per_address.county"
														className="text-sm font-medium"
													>
														County *
													</label>
													<Input
														id="per_address.county"
														name="per_address.county"
														value={formData.per_address.county}
														onChange={(e) =>
															handleAddressChange(
																"per_address",
																"county",
																e.target.value
															)
														}
														required
														aria-required="true"
													/>
												</div>
												<div className="space-y-2">
													<label
														htmlFor="per_address.state"
														className="text-sm font-medium"
													>
														State *
													</label>
													<Input
														id="per_address.state"
														name="per_address.state"
														value={formData.per_address.state}
														onChange={(e) =>
															handleAddressChange(
																"per_address",
																"state",
																e.target.value
															)
														}
														required
														aria-required="true"
													/>
												</div>
												<div className="space-y-2">
													<label
														htmlFor="per_address.country"
														className="text-sm font-medium"
													>
														Country *
													</label>
													<div className="relative">
														<MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
														<Input
															id="per_address.country"
															name="per_address.country"
															value={formData.per_address.country}
															onChange={(e) =>
																handleAddressChange(
																	"per_address",
																	"country",
																	e.target.value
																)
															}
															className="pl-8"
															required
															aria-required="true"
														/>
													</div>
												</div>
											</div>
										</>
									)}
								</div>
							</div>
						</TabsContent>
					</Tabs>
				</CardContent>
				<CardFooter>
					<Button type="submit">Submit</Button>
				</CardFooter>
			</Card>
		</form>
	);
}
