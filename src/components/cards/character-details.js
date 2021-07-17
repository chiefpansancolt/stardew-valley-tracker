export default function CharacterDetails({ character }) {
  return (
    <div className="bg-white shadow overflow-hidden rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Character Details</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Additional Details about your character.
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-4">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="mt-1 text-sm text-gray-900">{character.name}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Farm Type</dt>
            <dd className="mt-1 text-sm text-gray-900">{character.farmName}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Spouse</dt>
            <dd className="mt-1 text-sm text-gray-900">{character.spouse}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Day</dt>
            <dd className="mt-1 text-sm text-gray-900">{character.date.full}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Money</dt>
            <dd className="mt-1 text-sm text-gray-900">{character.money.full}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Total Earned</dt>
            <dd className="mt-1 text-sm text-gray-900">{character.totalMoneyEarned.full}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Time Played</dt>
            <dd className="mt-1 text-sm text-gray-900">{character.timePlayed.full}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Version</dt>
            <dd className="mt-1 text-sm text-gray-900">{character.version}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}