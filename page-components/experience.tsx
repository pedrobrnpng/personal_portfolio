import GitTree from '../components/GitTree';
import Layout from '../components/layout';
import SectionTitle from '../components/section-title';

export default function ExperienceSection() {
  return (
    <Layout>
      <SectionTitle title="Experience Tree" />
      <GitTree />
    </Layout>
  );
}

/**
 * fetch git data ?
 */
