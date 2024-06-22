import React, { useState } from 'react';
import './ProductAttributes.css';

interface ProductAttributesProps {
    attributes: {
        id: string;
        name: string;
        value: string;
    }[];
}

const ProductAttributes: React.FC<ProductAttributesProps> = ({ attributes }) => {
    const [selectedAttributes, setSelectedAttributes] = useState<{ [key: string]: string }>({});

    // Function to handle attribute selection
    const handleAttributeSelect = (name: string, value: string) => {
        setSelectedAttributes({ ...selectedAttributes, [name]: value });
    };

    // Extract unique attribute names
    const uniqueAttributeNames = Array.from(new Set(attributes.map(attr => attr.name)));

    return (
        <div className="product-attributes">
            {uniqueAttributeNames.map((name, index) => {
                // Filter values for the current attribute name
                const attributeValues = attributes.filter(attr => attr.name === name).map(attr => attr.value);

                return (
                    <div key={index} className="attribute-selector">
                        <span>{name.toUpperCase()}:</span>
                        {name.toLowerCase() === 'color' ? (
                            <div className="color-swatches">
                                {attributeValues.map((value, idx) => (
                                    <button
                                        key={idx}
                                        style={{ backgroundColor: value }}
                                        className={selectedAttributes[name] === value ? 'color-button selected' : 'color-button'}
                                        onClick={() => handleAttributeSelect(name, value)}
                                    />
                                ))}
                            </div>
                        ) : (
                            attributeValues.map((value, idx) => (
                                <button
                                    key={idx}
                                    className={selectedAttributes[name] === value ? 'attribute-button selected' : 'attribute-button'}
                                    onClick={() => handleAttributeSelect(name, value)}
                                >
                                    {value}
                                </button>
                            ))
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ProductAttributes;
