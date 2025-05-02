import { OrganizationList } from '@clerk/clerk-react';

export default function OrganizationListPage() {
  return (
    <div className="page centered">
      <OrganizationList
        afterCreateOrganizationUrl={(org) => `/organization/${org.slug}`}
        afterSelectPersonalUrl={(user) => `/user/${user.id}`}
        afterSelectOrganizationUrl={(org) => `/organization/${org.slug}`}
      />
    </div>
  );
}
