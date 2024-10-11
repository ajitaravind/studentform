import Image from "next/image";
import StudentForm from "./StudentForm";

export default function Home() {
	const handleFormSubmit = (formData) => {
		// Handle form submission logic here
		console.log("Form data submitted:", formData);
	};

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
			<StudentForm onSubmit={handleFormSubmit} />
		</div>
	);
}
