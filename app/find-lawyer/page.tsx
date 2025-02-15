import { LawyerDirectory } from '@/components/lawyer-directory';

export default function FindLawyer() {
  return (
    <div className="container bg-gray-900 mx-auto px-4 py-8">
      <h1 className="text-3xl text-center text-white font-bold mb-6">
        Find a Lawyer
      </h1>
      <LawyerDirectory />
    </div>
  );
}
