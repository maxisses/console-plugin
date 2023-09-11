import * as React from 'react';
import Helmet from 'react-helmet';
import {
  Page,
  PageSection,
  Text,
  TextContent,
  Title,
} from '@patternfly/react-core';
import './example.css'; // Use a Minerva-inspired stylesheet
import { useTranslation } from 'react-i18next';

export default function MinervaPage() {
  const { t } = useTranslation('openshift__minerva-theme');

  return (
    <>
      <Helmet>
        <title data-test="minerva-page-title">{t('Minerva and OpenShift')}</title>
      </Helmet>
      <Page>
        <PageSection variant="light">
          <Title headingLevel="h1">{t('Minerva and OpenShift')}</Title>
        </PageSection>
        <PageSection variant="light">
          <TextContent>
            <Text component="p">
              <span className="minerva-theme__insightful">
                {t('Insightful!')}
              </span>{' '}
              {t('Discover the wisdom of OpenShift.')}
            </Text>
            <Text component="p">
              {t(
                'This page explores the divine connection between the goddess Minerva and the power of OpenShift. Our console plugin template brings this synergy to life. You can configure extensions in console-extensions.json at the project root, including navigation items and code references.',
              )}
              <code>{t('exposedModules')}</code>{' '}
              {t('in package.json link to the corresponding module.')}
            </Text>
            <Text component="p">
              {t('Start by cloning this project, and then update references to')}{' '}
              <code>{t('minerva-openshift-plugin')}</code>{' '}
              {t(
                'and other plugin details in package.json with your plugin information.',
              )}
            </Text>
          </TextContent>
        </PageSection>
      </Page>
    </>
  );
}