"use client";

import Image from "next/image";
import StudentForm from "./StudentForm";
import { FormData } from "./StudentForm"; // Ensure this import path is correct

export default function Home() {
	const handleFormSubmit = (formData: FormData) => {
		console.log("Form data submitted:", formData);
	};

	return (
		<div className="min-h-screen p-4 sm:p-8 font-[family-name:var(--font-geist-sans)] overflow-auto">
			<main className="max-w-4xl mx-auto">
				<h1 className="text-2xl font-bold mb-6">Student Profile</h1>
				<StudentForm onSubmit={handleFormSubmit} />
			</main>
		</div>
	);
}
