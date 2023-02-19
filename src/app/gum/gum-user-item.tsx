import { Box, Group, Stack } from '@mantine/core'
import React from 'react'
import { UiDebugModal } from '../ui/ui-debug'
import { LinkAccount } from '../ui/ui-link-explorer'
import { GumProfileList } from './gum-profile-list'
import { GumUserDeleteButton } from './gum-user-delete-button'
import { GumUser } from './lib/gum-interfaces'

export function GumUserItem({ user }: { user: GumUser }) {
  return (
    <Stack spacing="xl">
      <Box px="xl">
        <Group position="apart">
          <Group>
            <LinkAccount address={user?.publicKey} ellipsis />
            <UiDebugModal data={{ user }} />
          </Group>
          <Group position="right">
            <GumUserDeleteButton userAccount={user?.publicKey} />
          </Group>
        </Group>
      </Box>
      <Box px="lg">
        <GumProfileList user={user} />
      </Box>
    </Stack>
  )
}
