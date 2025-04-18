import Form from 'next/form'
import SearchFromReset from './SearchFromReset'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action='/' scroll={false} className='search-form'>
      <input
        name='query'
        className='search-input'
        placeholder='Search Startups'
        defaultValue={query}
      />
      <div className='flex gap-2'>{query && <SearchFromReset />}</div>
      {
        <Button type='submit' className='search-btn text-white'>
          <Search className='size-5' />
        </Button>
      }
    </Form>
  )
}

export default SearchForm
