import React from 'react';
import renderer from 'react-test-renderer'
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product1 } from '../data/products';



describe('ProductTitle Test', () => { 

    test('should show the component with its custom title', () => { 

        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" className="custom-class"/>
        )
            expect(wrapper.toJSON()).toMatchSnapshot()
        })
        
        test('should show the component with its product name', () => {
            const wrapper = renderer.create(
                <ProductCard product={product1}>
                    {
                        () => (
                            <ProductTitle />
                        )
                    }
                </ProductCard>
            )
                expect(wrapper.toJSON()).toMatchSnapshot()
            
     })

 })
